// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeN1H-9sdKMdooCQn08O9rBIPwNQmTHas",
  authDomain: "firegram-92c62.firebaseapp.com",
  projectId: "firegram-92c62",
  storageBucket: "firegram-92c62.appspot.com",
  messagingSenderId: "234726865339",
  appId: "1:234726865339:web:52eb657bf0808a3e68ec9e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore,timestamp };