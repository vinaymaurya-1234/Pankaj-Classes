// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // Import Firebase Auth

const firebaseConfig = {
  apiKey: "AIzaSyCav7z4QRIla6qR7_6EIzProL_DovdTOro",
  authDomain: "pankajclasses-ff152.firebaseapp.com",
  projectId: "pankajclasses-ff152",
  storageBucket: "pankajclasses-ff152.firebasestorage.app",
  messagingSenderId: "115844343181",
  appId: "1:115844343181:web:edeed834cf4667fc4d09c4",
  measurementId: "G-G8MNHJ2Q56"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);  // Initialize and export Auth
