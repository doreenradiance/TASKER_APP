import firebase from '../../firebase/firebase'
import { showMessage } from 'react-native-flash-message'
import { numberWithCommas } from '../../utils'

const db = firebase.firestore()

export function withdraw(amt, userId, cb) {
    return async (dispatch) => {
        const fees = parseInt(amt) * 0.01
        db.collection('profiles').doc(userId).update({
            account: firebase.firestore.FieldValue.increment(-(parseInt(amt)+fees)),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'withdrawal',
                amount: numberWithCommas(parseInt(amt) + fees),
                date: {seconds: Date.now() / 1000}
            })
        }).then(async () => {
            await db.collection('profiles').doc('taskerapp').update({
                account: firebase.firestore.FieldValue.increment(fees),
                accountHistory: firebase.firestore.FieldValue.arrayUnion({
                    type: 'fees',
                    amount: amt,
                    date: {seconds: Date.now() / 1000}
                })
            })
            cb()
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

export function deposit(amt, userId, cb) {
    return async (dispatch) => {
        db.collection('profiles').doc(userId).update({
            account: firebase.firestore.FieldValue.increment(parseInt(amt)),
            accountHistory: firebase.firestore.FieldValue.arrayUnion({
                type: 'deposit',
                amount: amt,
                date: {seconds: Date.now() / 1000}
            })
        }).then(() => {
            cb()
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
                date: {seconds: Date.now() / 1000}
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


