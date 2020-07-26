import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtM2D4qa5XWviEDyv3BzRSBUZG8qtnFug",
    authDomain: "vaarta-62ee6.firebaseapp.com",
    databaseURL: "https://vaarta-62ee6.firebaseio.com",
    projectId: "vaarta-62ee6",
    storageBucket: "vaarta-62ee6.appspot.com",
    messagingSenderId: "835180967591",
    appId: "1:835180967591:web:ac93922f4b88ed6ac20d82",
    measurementId: "G-1QZPFKBQM6"}

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;