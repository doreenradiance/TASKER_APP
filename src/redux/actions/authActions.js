import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'

const db = firebase.firestore()
let userObj;

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        userObj = user
        console.log("current user =>", userObj)
    }
})


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
               account: 0.00,
               accountHistory: [] 
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
            
            const profile = await db.collection('profiles').doc(user.user.uid).get()
            dispatch(dispatcher("log_in", {...profile.data(), id: profile.id }))
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


export function editProfile(profile, userId, cb) {
    return async (dispatch) => {
        db.collection('profiles').doc(userId).update(profile).then(() => {
            cb()
            showMessage({
                message: "Profile Updated",
                type: "success"
            })
        }).catch(e => {
            console.log(e)
            showMessage({
                message: e.message || "Profile Update Failed",
                type: "danger"
            })
        })
    }
}


export function getCurrentUser() {
    
    return async (dispatch) => {
       db.collection('profiles').doc(userObj?.uid).onSnapshot(snapshot => {
           
            const user = {...snapshot.data(), id: snapshot.id}
            dispatch(dispatcher("update_user", user))
       },
         (err) => {

         }
       )
    }
}


export async function getUser(userId) {
    const  user = await db.collection('profiles').doc(userId).get()
    return {
        ...user.data(),
        id: user.id 
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