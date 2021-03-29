import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'

const db = firebase.firestore()

export function withdraw(amt, id) {
    return async (dispatch) => {
        db.collection('profiles').doc(id).update({
            account: parseInt(user.account) - parseInt(amt),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'withdrawal',
                amount: amt,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
        }).then(() => {
            showMessage({
                message: "Withdrawal Successful",
                type: 'success'
            })
        }).catch(() => {
            showMessage({
                message: 'withdrawal Failed',
                type: 'danger'
            })
        })
    }
}

export function deposit(amt, id) {
    return async (dispatch) => {
        db.collection('profiles').doc(id).update({
            account: parseInt(user.account) + parseInt(amt),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'deposit',
                amount: amt,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
        }).then(() => {
            showMessage({
                message: "deposit Successful",
                type: 'success'
            })
        }).catch(() => {
            showMessage({
                message: 'deposit Failed',
                type: 'danger'
            })
        })
    }
}

export function payment(amt, id) {
    return async (dispatch) => {
        db.collection('profiles').doc(id).update({
            account: parseInt(user.account) + parseInt(amt),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'payment',
                amount: amt,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
        }).then(() => {
            showMessage({
                message: "payment sent",
                type: 'success'
            })
        }).catch(() => {
            showMessage({
                message: 'payment failed',
                type: 'danger'
            })
        })
    }
}


