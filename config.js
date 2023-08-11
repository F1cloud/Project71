import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

  const firebaseConfig = {
    apiKey: "AIzaSyA3oZnDn0I8agy8E8NwgQo7JT2h_B215ns",
    authDomain: "project71-65c38.firebaseapp.com",
    projectId: "project71-65c38",
    storageBucket: "project71-65c38.appspot.com",
    messagingSenderId: "789099166640",
    appId: "1:789099166640:web:e1a4c8f70bb95a0029f475"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
