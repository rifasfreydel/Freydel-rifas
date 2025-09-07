// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUTsbg3w92YhZGBPh2ltshlJPFS4kyvr4",
  authDomain: "sistema-de-rifas-e0ab6.firebaseapp.com",
  projectId: "sistema-de-rifas-e0ab6",
  storageBucket: "sistema-de-rifas-e0ab6.firebasestorage.app",
  messagingSenderId: "267376702258",
  appId: "1:267376702258:web:20e287169c9416031fdd2b",
  measurementId: "G-END1HB0C2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
