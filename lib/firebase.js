import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUTsbg3w92YhZGBPh2ltshlJPFS4kyvr4",
  authDomain: "sistema-de-rifas-e0ab6.firebaseapp.com",
  projectId: "sistema-de-rifas-e0ab6",
  storageBucket: "sistema-de-rifas-e0ab6.firebasestorage.app",
  messagingSenderId: "267376702258",
  appId: "1:267376702258:web:20e287169c9416031fdd2b",
  measurementId: "G-END1HB0C2Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
