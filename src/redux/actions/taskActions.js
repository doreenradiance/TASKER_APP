import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'
import { dispatcher } from './authActions'

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