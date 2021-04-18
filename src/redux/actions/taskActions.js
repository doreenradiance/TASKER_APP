import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'
import { dispatcher } from './authActions'
import { payment } from './accountActions'

const db = firebase.firestore()
let userObj;

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        userObj = user
    }
})

export const createTask = (task={}, cb) => {
    
    return async (dispatch) => {
        const user = await db.collection("profiles").doc(userObj?.uid).get()
        if(user.amount < task.amount) throw Error('Not Enough Balance to Created Task');
        db.collection("tasks").add({
            ...task,
            createdBy: userObj.uid,
            isCompleted: false,
            assignedTo: '',
            isAssigned: false,
            applications: [],
            // date: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(async (doc) => {
            await db.collection('profiles').doc(userObj?.uid).update({
               account: firebase.firestore.FieldValue.increment(-parseInt(task.amount)) 
            })
            cb()
            showMessage({
                message: "Task Created",
                type: "success"
            })
        })
        .catch((e) => {
            showMessage({
                message: e.message,
                type: "danger"
            })
        })
    }
}


// get all task
export const getAllTasks = () => {
    return async (dispatch) => {
        db.collection('tasks').onSnapshot((snapShot) => {
            const tasks = []
            snapShot.forEach(doc => {
                //exclude tasks already applied for
                if(!!(doc.data().applications.find(application => application.id === userObj.uid))) return
                //exclude tasks created by the current user
                if(doc.data().createdBy === userObj.uid) return
                //exclude tasks that have already been assigned
                if(doc.data().isAssigned) return 
                const data = doc.data()
                data.id = doc.id
                data.applied = !!(doc.data().applications.find(application => application.id === userObj.uid))
                return tasks.push(data)
            })


            dispatch(dispatcher("all_tasks", tasks))
        },
            (err) => {
                showMessage({
                    message: err.message,
                    type: "danger"
                })
                throw err
            }
        )
    }
}


//get one task
export const getTask = (taskId, cb) => {
    return async (dispatch) => {
        try {
            const taskDetails = await db.collection('tasks').doc(taskId).get() 
            const task = taskDetails.data()

            //check if current user applied
            task.applied = !!(task.applications.find(application => application.id === userObj.uid))
            
            dispatch(dispatcher("task_details", task))
            cb(false)

        }catch (e) {
            cb(false)
            showMessage({
                message: e.message,
                type: "danger"
            }) 
        }
    }
}


// get all task activities
export const allTaskActivities = (id) => {  
    
    return async (dispatch) => {
        try {
            const newList =  []
            // const created = await db.collection('tasks').where("createdBy", "==", id ).get()
            const assigned = await db.collection('tasks').where("assignedTo", "==", id ).get()

            // created.forEach(doc => newList.push(doc));
            assigned.forEach(doc => newList.push(doc));
            
            const taskActivities = []
            newList.forEach(doc => {
                const data = doc.data()
                data.id = doc.id
                return taskActivities.push(data)
            })

            dispatch(dispatcher("task_activity", taskActivities))
        
        }catch (e) {
            console.log(e.message)
        }
    }
}

// get all created tasks
export const getCreatedTask = () => {  

    return async (dispatch) => {
        try {
            const newList =  []
            const created = await db.collection('tasks').where("createdBy", "==", userObj.uid ).get()

            created.forEach(doc => newList.push(doc));
            
            const tasks = []
            newList.forEach(doc => {
                const data = doc.data()
                data.id = doc.id
                return tasks.push(data)
            })

            dispatch(dispatcher("created_task", tasks))       
        }catch (e) {
            console.log(e.message)
        }
    }
}


export const appliedToTasks = () => {
    return async (dispatch) => {
        try {
            const taskList = []
            const tasks = await db.collection("tasks").get()

            tasks.forEach(doc => {
                if(!!doc.data().applications.find(itm => itm.id === userObj.uid) /*&& !doc.data().isAssigned */) {
                    const data = doc.data()
                    data.id = doc.id
                    return taskList.push(data)
                }
            })

            dispatch(dispatcher("all_tasks", taskList))  

        }catch (e) {
            console.log(e.message)
            throw e
        }
    }
}


export const applyForTask = (id, user, cb) => {
    return async (dispatch) => {
        db.collection('tasks').doc(id).update({
            applications: firebase.firestore.FieldValue.arrayUnion({
                id: user.id,
                name: user.name,
                email: user.email
            }) 
        }).then(doc => {
            cb()
            showMessage({
                message: "Applied Successfully",
                type: "success"
            })
        }).catch(e => {
            showMessage({
                message: e.message,
                type: "danger"
            })
        })
    }
}


export const assignTask = (taskId, userId, cb) => {
    return async (dispatch) => {
        db.collection('tasks').doc(taskId).update({
            assignedTo: userId,
            isAssigned: true
        }).then(doc => {
            cb()
            showMessage({
                message: "Task Assigned",
                type: "success"
            })
        }).catch(e => {
            console.log(e.message)
            showMessage({
                message: e.message,
                type: "danger"
            })
        })
    }
}



// export const markAsComplete = (taskId, userId, amt) => {
//     return async (dispatch) => {
//         db.collection('tasks').doc(taskId).update({
//             isComplete: userId 
//         }).then(doc => {
//             payment(userId, amt)
//             // showMessage({
//             //     message: "Task Assigned",
//             //     type: "success"
//             // })
//         }).catch(e => {
//             showMessage({
//                 message: e.message,
//                 type: "danger"
//             })
//         })
//     }
// }