// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQefhovjMNkfOISwzCFdZZaZPwPt36HOY",
  authDomain: "al-chat-9614d.firebaseapp.com",
  projectId: "al-chat-9614d",
  storageBucket: "al-chat-9614d.firebasestorage.app",
  messagingSenderId: "866055571114",
  appId: "1:866055571114:web:2caf3cbe111ea22790b2d3",
  measurementId: "G-RW7ZZ3GCDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);