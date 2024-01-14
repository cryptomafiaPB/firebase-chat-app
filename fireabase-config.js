// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzBfVoseoyDC-Hnncet4xZLZUsx6xAhpM",
  authDomain: "chatapp-1b83f.firebaseapp.com",
  projectId: "chatapp-1b83f",
  storageBucket: "chatapp-1b83f.appspot.com",
  messagingSenderId: "417822961487",
  appId: "1:417822961487:web:14fae0058129fa75bf9f3a",
  measurementId: "G-6BZ7QBHD04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
