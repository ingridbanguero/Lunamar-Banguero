import firebase from 'firebase';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyBTCQvyn4H50u28FVb3kgYu4ozkBSQtVXs",
    authDomain: "lunamar-banguero.firebaseapp.com",
    projectId: "lunamar-banguero",
    storageBucket: "lunamar-banguero.appspot.com",
    messagingSenderId: "1022823474262",
    appId: "1:1022823474262:web:376a4afbb4d906718dc7f7"
});

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app);