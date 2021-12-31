// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOd8XhhyCL6JNZ2pEzkDptnJ3U2okUG1c",
  authDomain: "ecommerce-app-f446c.firebaseapp.com",
  projectId: "ecommerce-app-f446c",
  storageBucket: "ecommerce-app-f446c.appspot.com",
  messagingSenderId: "625322021004",
  appId: "1:625322021004:web:ab3b61231d2ea30a9caba9",
  measurementId: "G-J8S6TZM2C2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
