import firebase from "firebase";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4SfUe0LQYUV1pCU6vSVqTmEPhfIifhUA",
  authDomain: "react-native-firebase-62fa6.firebaseapp.com",
  projectId: "react-native-firebase-62fa6",
  storageBucket: "react-native-firebase-62fa6.appspot.com",
  messagingSenderId: "573293502530",
  appId: "1:573293502530:web:431f298bcb505603334ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};