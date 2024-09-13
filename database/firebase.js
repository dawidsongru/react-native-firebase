// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4SfUe0LQYUV1pCU6vSVqTmEPhfIifhUA',
  authDomain: 'react-native-firebase-62fa6.firebaseapp.com',
  projectId: 'react-native-firebase-62fa6',
  storageBucket: 'react-native-firebase-62fa6.appspot.com',
  messagingSenderId: '573293502530',
  appId: '1:573293502530:web:431f298bcb505603334ddb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
