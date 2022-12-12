import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7Mkr9VagzVv98Htrzt5qPpaMBK_MQMxk",
    authDomain: "practica-redux-d019e.firebaseapp.com",
    projectId: "practica-redux-d019e",
    storageBucket: "practica-redux-d019e.appspot.com",
    messagingSenderId: "185237588380",
    appId: "1:185237588380:web:8782b6fc1a47e22646e059"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {db, firebase, googleAuthProvider}