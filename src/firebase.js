import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDzmUVcWZcTTqdluL9KRrepPLwbvGWcAzE",
    authDomain: "tinder-clone-7607c.firebaseapp.com",
    databaseURL: "https://tinder-clone-7607c.firebaseio.com",
    projectId: "tinder-clone-7607c",
    storageBucket: "tinder-clone-7607c.appspot.com",
    messagingSenderId: "469732441292",
    appId: "1:469732441292:web:2d0ae6d66b4cecc9f6d669",
    measurementId: "G-R66PNWS9X3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore()

export default database;
