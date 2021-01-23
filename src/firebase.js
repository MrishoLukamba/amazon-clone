import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4pXFYuhyf1t2Gm59gsz_hdwA8MjMwc5I",
    authDomain: "clone-cd206.firebaseapp.com",
    databaseURL: "https://clone-cd206.firebaseio.com",
    projectId: "clone-cd206",
    storageBucket: "clone-cd206.appspot.com",
    messagingSenderId: "1086944005585",
    appId: "1:1086944005585:web:68837f14dcc99e479de4f0",
    measurementId: "G-B0G421QGSH"
  };
  //initialise the app
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   // initialise the database
   const db = firebaseApp.firestore();
   // initialise authentication
   const auth = firebase.auth();

   export {db, auth};