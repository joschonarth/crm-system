import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_z9PsPWqH3cO27O-U2b56PxEzZIDXbOI",
  authDomain: "crm-system-157b8.firebaseapp.com",
  projectId: "crm-system-157b8",
  storageBucket: "crm-system-157b8.appspot.com",
  messagingSenderId: "55239839859",
  appId: "1:55239839859:web:7749b87d79e33bc5131a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
