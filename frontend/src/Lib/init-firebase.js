// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA78uJzFlvMnWtcZlsljCia0-XczBiNVE",
  authDomain: "review-ap.firebaseapp.com",
  projectId: "review-ap",
  storageBucket: "review-ap.appspot.com",
  messagingSenderId: "877886364237",
  appId: "1:877886364237:web:b3caee89598a3ca08c9a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);