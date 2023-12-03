// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9RyftczTTN7Jwu7BdUBdvjpjNkoEqlFY",
  authDomain: "netflix-clone-4ebed.firebaseapp.com",
  projectId: "netflix-clone-4ebed",
  storageBucket: "netflix-clone-4ebed.appspot.com",
  messagingSenderId: "610934770692",
  appId: "1:610934770692:web:1e9fa356b89c51e3837951",
  measurementId: "G-H41L2GT949",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
