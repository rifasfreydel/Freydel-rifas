import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState(2); // empieza en 2 boletos
  const precio = 15; // precio por boleto
  const total = cantidad * precio;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", color: "#333" }}>
      {/* HEADER */}
      <header style={{ textAlign: "center", padding: "12px", background: "#ff6600" }}>
        <img src="/logo.png" alt="Logo" style={{ height: "55px" }} />
      </header>

      {/* FLAYER */}
      <div style={{ textAlign: "center", margin: "15px 0" }}>
        <img
          src="/flayer.png"
          alt="Flayer"
          style={{
            width: "95%",
            maxWidth: "600px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* CONTENEDOR */}
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🎟️ Compra tus boletos</h2>

        {/* BOLETOS */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", margin: "20px 0" }}>
          <button style={btnCircle} onClick={() => setCantidad(Math.max(2, cantidad - 1))}>-</button>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{cantidad}</span>
          <button style={btnCircle} onClick={() => setCantidad(cantidad + 1)}>+</button>
        </div>

        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Total: {total} Bs</h3>
        <button style={btnMain}>Confirmar cantidad</button>

        {/* FORMULARIO */}
        <form style={{ marginTop: "25px" }}>
          <label style={label}>Nombres y
