// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGd1atPsApntsjej9PCzeNXS2dYnqMr1M",
  authDomain: "simple-firebase-75be4.firebaseapp.com",
  projectId: "simple-firebase-75be4",
  storageBucket: "simple-firebase-75be4.firebasestorage.app",
  messagingSenderId: "412782702606",
  appId: "1:412782702606:web:e2265bb3e716bfbc358c5f",
  measurementId: "G-R551RYJ36Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;