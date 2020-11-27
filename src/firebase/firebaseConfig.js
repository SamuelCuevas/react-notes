import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCOMi7HMkqEwlM-ks2wDvoQeMqDrIr-sJY",
    authDomain: "react-app-cursos-58108.firebaseapp.com",
    databaseURL: "https://react-app-cursos-58108.firebaseio.com",
    projectId: "react-app-cursos-58108",
    storageBucket: "react-app-cursos-58108.appspot.com",
    messagingSenderId: "231455081523",
    appId: "1:231455081523:web:214709e7d9ed397f7fcf46"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}