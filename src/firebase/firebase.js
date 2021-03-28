import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyASH0-VJaMVOKNc6zHvL-G8q4zIpbZ8VG4",
    authDomain: "taskerapp-775cc.firebaseapp.com",
    projectId: "taskerapp-775cc",
    storageBucket: "taskerapp-775cc.appspot.com",
    messagingSenderId: "24796578660",
    appId: "1:24796578660:web:65b4002d9fae82b64d3071"
};

firebase.initializeApp(firebaseConfig);

export default firebase;