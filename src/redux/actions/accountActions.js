import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'

const db = firebase.firestore()

export function withdraw(amt, userId) {
    return async (dispatch) => {
        db.collection('profiles').doc(userId).update({
            account: firebase.firestore.FieldValue.increment(-parseInt(amt)),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'withdrawal',
                amount: amt,
                date: Date.now()
            })
        }).then(() => {
            showMessage({
                message: "Withdrawal Successful",
                type: 'success'
            })
        }).catch((e) => {
            showMessage({
                message: 'withdrawal Failed',
                type: 'danger'
            })
        })
    }
}

export function deposit(amt, userId) {
    return async (dispatch) => {
        db.collection('profiles').doc(userId).update({
            account: firebase.firestore.FieldValue.increment(parseInt(amt)),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'deposit',
                amount: amt,
                date: Date.now()
            })
        }).then(() => {
            showMessage({
                message: "deposit Successful",
                type: 'success'
            })
        }).catch((e) => {
            showMessage({
                message: 'deposit Failed',
                type: 'danger'
            })
        })
    }
}

export function payment(amt, userId, taskId) {
    return async (dispatch) => {
        //user to pay
        let user = await db.collection("profiles").doc(userId).get()
        user = user.data()
        db.collection('profiles').doc(userId).update({
            account: parseInt(user.account) + parseInt(amt),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'payment',
                amount: amt,
                date: Date.now()
            })
        }).then(async () => {
            await db.collection('tasks').doc(taskId).update({ isCompleted: true })
            showMessage({
                message: "payment sent",
                type: 'success'
            })
        }).catch((e) => {
            console.log(e)
            showMessage({
                message: 'payment failed',
                type: 'danger'
            })
        })
    }
}


