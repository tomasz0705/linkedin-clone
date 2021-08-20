import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDi-slVkF6Br_zZqu7bJmQDdHT6zdgvLJ4",
    authDomain: "linkedin-clone-2cd7f.firebaseapp.com",
    projectId: "linkedin-clone-2cd7f",
    storageBucket: "linkedin-clone-2cd7f.appspot.com",
    messagingSenderId: "232086276797",
    appId: "1:232086276797:web:413aa060b82373e46845d4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };