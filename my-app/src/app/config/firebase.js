// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  /* Insira as credenciais do seu projeto do Firebase */
  apiKey: "AIzaSyC_z9PsPWqH3cO27O-U2b56PxEzZIDXbOI",
  authDomain: "crm-system-157b8.firebaseapp.com",
  projectId: "crm-system-157b8",
  storageBucket: "crm-system-157b8.appspot.com",
  messagingSenderId: "55239839859",
  appId: "1:55239839859:web:7749b87d79e33bc5131a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
