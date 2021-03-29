import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'


export function createEmailAccount(email, password, cb) {
    return async (dispatch) => {
        try {
            console.log("working")
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch(dispatcher("log_in",user))
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