// pages/admin.js
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// ⚡ Configuración de Firebase (la misma que tienes en lib/firebase.js)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Acceso concedido, bienvenido al panel admin");
      // aquí más adelante redirigiremos al panel de control
    } catch (err) {
      setError("❌ Usuario o contraseña incorrectos");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={login}
        style={{
          background: "#111",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(255,102,0,0.5)",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#ff6600" }}>
          🔑 Login Admin
        </h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={input}
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={input}
        />

        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

        <button type="submit" style={btn}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #444",
  background: "#222",
  color: "#fff",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#ff6600",
  color: "white",
  fontWeight: "bold",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
