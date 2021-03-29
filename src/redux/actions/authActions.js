import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'

const db = firebase.firestore()


export function createEmailAccount(email, password, cb) {
    return async (dispatch) => {
        try {
            
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await db.collection('profiles').doc(user.user.uid).set({
               name: 'John Doe',
               email: user.user.email,
               phone: '',
               tasksCreated: [],
               tasksDone: [],
               account: 0 
            })

            const profile = await db.collection('profiles').doc(user.user.uid).get()
            dispatch(dispatcher("log_in", {...profile.data(), id: profile.id }))
            cb()
        }catch (e) {
            console.log(e)
            showMessage({
                message: e.message,
                type: "danger"
            })
        }
        
    }
}

export function login(email, password, cb) {
    return async (dispatch) => {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(dispatcher("log_in", user))
            cb()
        }catch (e) {
            showMessage({
                message: e.message,
                type: "danger"
            })
        }
    }
}

export function logout() {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(dispatcher('log_out'))
    }
}



export function dispatcher(type, payload) {
    return payload? {
        type,
        payload
    } : {
        type,
    }
}