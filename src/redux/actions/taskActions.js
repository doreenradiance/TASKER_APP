import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'
import { dispatcher } from './authActions'
import { payment } from './accountActions'

const db = firebase.firestore()

export const createTask = (task={}) => {
    return async (dispatch) => {
        db.collection("tasks").add(task)
        .then((doc) => {
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
                const data = doc.data()
                data.id = doc.id
                return tasks.push(data)
            })


            dispatch(dispatcher("all_tasks", tasks))
        },
            (err) => {
                showMessage({
                    message: err.message,
                    type: "danger"
                })
            }
        )
    }
}


// get all task activities
export const allTaskActivities = (id) => {
    return async (dispatch) => {
        try {
            const createdTasks = await db.collection('tasks').where("createdBy", "==", id ).get()
            const assignedTasks = await db.collection('tasks').where("assigned", "==", id ).get()
            const newList =  []
            
            createdTasks.forEach(doc => newList.push(doc))
            assignedTasks.forEach(doc => newList.push(doc))
            
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


export const applyForTask = (id, user) => {
    return async (dispatch) => {
        db.collection('tasks').doc(id).update({
            applications: firebase.firestore.FieldValue.arrayUnion(user) 
        }).then(doc => {
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


export const assignTask = (taskId, userId) => {
    return async (dispatch) => {
        db.collection('tasks').doc(taskId).update({
            assignedTo: userId 
        }).then(doc => {
            showMessage({
                message: "Task Assigned",
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