// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBMkEGZmAwdEglvDDNLlvXBFcCmeAsiGI",
  authDomain: "my-teacher-1767f.firebaseapp.com",
  projectId: "my-teacher-1767f",
  storageBucket: "my-teacher-1767f.firebasestorage.app",
  messagingSenderId: "1086138726827",
  appId: "1:1086138726827:web:f8d1065815205db85c7aee",
  measurementId: "G-9Q4MKL4VTM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);