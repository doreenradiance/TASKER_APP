import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'


export function createEmailAccount(email, password) {
    return async (dispatch) => {
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch(dispatcher("log_in",user))
        }catch (e) {
            showMessage({
                message: e.message,
                type: "danger"
            })
        }
        
    }
}

export function login(email, password) {
    return async (dispatch) => {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(dispatcher("log_in", user))
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