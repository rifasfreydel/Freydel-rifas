import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState(2);
  const precio = 15; // precio por boleto en Bs
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

        {/* TOTAL */}
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Total: <span style={{ color: "#ff6600" }}>{total} Bs</span>
        </h3>

        {/* FORMULARIO */}
        <form style={{ marginTop: "25px" }}>
          <label style={label}>Nombres y Apellidos *</label>
          <input type="text" required style={input} />

          <label style={label}>Teléfono *</label>
          <input type="tel" required style={input} />

          <label style={label}>Correo *</label>
          <input type="email" required style={input} />

          {/* MÉTODOS DE PAGO */}
          <h3 style={{ margin: "25px 0 10px" }}>💳 Métodos de Pago</h3>
          <div style={card}>
            <strong>Pago Móvil - Banco Provincial</strong>
            <p style={{ margin: "5px 0" }}>
              Teléfono: <b>04244214965</b><br />
              C.I: <b>30281789</b>
            </p>
          </div>

          <div style={card}>
            <strong>Binance</strong>
            <p style={{ margin: "5px 0" }}>
              ID: <b>403244297</b>
            </p>
          </div>

          {/* COMPROBANTE DE PAGO */}
          <h3 style={{ margin: "30px 0 10px" }}>🧾 Comprobante de Pago</h3>

          <label style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <input type="checkbox" /> Enviar captura inmediatamente
          </label>

          <div style={uploadBox}>
            <label htmlFor="comprobante" style={{ cursor: "pointer", textAlign: "center", width: "100%" }}>
              <div style={{ color: "#ff6600", fontWeight: "bold", fontSize: "14px" }}>
                📤 Foto / Captura de Pantalla
              </div>
            </label>
            <input id="comprobante" type="file" accept="image/*" required style={{ display: "none" }} />
          </div>

          <p style={{ marginTop: "10px", fontWeight: "bold", textAlign: "center" }}>
            BANESCO: {total} Bs ({cantidad} boletos)
          </p>

          <p style={{ textAlign: "center", fontSize: "12px", marginTop: "10px" }}>
            Al confirmar autorizo el uso de <span style={{ color: "#ff6600", fontWeight: "bold" }}>Mis Datos Personales</span>
          </p>

          <button type="submit" style={btnMain}>
            CONFIRMAR
          </button>
        </form>

        {/* === PORCENTAJE DE VENTA === */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h3 style={{ marginBottom: "10px" }}>🎯 Progreso de la Rifa</h3>
          <div style={{
            background: "#e0e0e0",
            borderRadius: "20px",
            overflow: "hidden",
            height: "25px",
            maxWidth: "500px",
            margin: "0 auto"
          }}>
            <div style={{
              width: "42.7%", // <- aquí luego conectamos con Firebase
              background: "#ff6600",
              height: "100%",
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              lineHeight: "25px"
            }}>
              42.7% vendido
            </div>
          </div>
        </div>

        {/* === VERIFICAR TICKETS === */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h3 style={{ marginBottom: "15px" }}>📩 ¿Quieres verificar tus tickets?</h3>
          <p>Ingresa tu correo y te los enviaremos allí:</p>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("✅ Revisa tu bandeja de entrada, pronto recibirás tus tickets.");
            }}
            style={{ maxWidth: "400px", margin: "20px auto" }}
          >
            <input
              type="email"
              placeholder="Ingresa tu correo..."
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginBottom: "15px"
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "none",
                background: "#ff6600",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Verificar mis tickets
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ==== ESTILOS ==== */
const btnMain = {
  display: "block",
  width: "100%",
  padding: "15px",
  background: "#ff6600",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  margin: "15px 0",
  cursor: "pointer",
};

const btnCircle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "none",
  background: "#ff6600",
  color: "#fff",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
};

const label = {
  fontWeight: "bold",
  display: "block",
  marginBottom: "5px",
};

const card = {
  background: "#f9f9f9",
  padding: "12px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  marginBottom: "15px",
};

const uploadBox = {
  border: "2px dashed #ccc",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  marginBottom: "15px",
};
