/*
Description: This file stores the configuration for the application related to Firebase database.
*/


// firebase config key setup

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Please add your own firebase config key here

const firebaseConfig = {
    apiKey: "##################",
    authDomain: "#################",
    projectId: "###########",
    storageBucket: "##############",
    messagingSenderId: "##############",
    appId: "#################",
    measurementId: "###############"
};


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
