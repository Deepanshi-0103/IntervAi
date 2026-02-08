// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ_7Be-WPLAdWkfT_V4TSEOJw7mtldoak",
  authDomain: "intervai-fc3b2.firebaseapp.com",
  projectId: "intervai-fc3b2",
  storageBucket: "intervai-fc3b2.firebasestorage.app",
  messagingSenderId: "524274621228",
  appId: "1:524274621228:web:5816cfdff71d124be52a89",
  measurementId: "G-2SK1R7K222"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
// export const db = getFirestore(app);