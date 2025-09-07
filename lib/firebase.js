// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

// 🔑 Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUTsbg3w92YhZGBPh2ltshlJPFS4kyvr4",
  authDomain: "sistema-de-rifas-e0ab6.firebaseapp.com",
  projectId: "sistema-de-rifas-e0ab6",
  storageBucket: "sistema-de-rifas-e0ab6.appspot.com", // ⚠️ cambia ".app" → ".com"
  messagingSenderId: "267376702258",
  appId: "1:267376702258:web:20e287169c9416031fdd2b"
};

// 🚀 Inicializa Firebase solo una vez
const app = initializeApp(firebaseConfig);

// Base de datos y storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
