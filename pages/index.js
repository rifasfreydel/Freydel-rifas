import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState(2);
  const precio = 15; // precio por boleto en Bs
  const total = cantidad * precio;

  // copiar texto
  const copiar = (texto) => {
    navigator.clipboard.writeText(texto);
    alert("Copiado ✅");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#000", color: "#f1f1f1" }}>
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          background: "#ff6600",
        }}
      >
        <img src="/logo.png" alt="Logo" style={{ height: "65px" }} />
        <p style={{ fontSize: "13px", lineHeight: "1.4", marginLeft: "15px", color: "#fff" }}>
          <b>Juega y gana con Freydel</b> 🎉 <br />
          Cada boleto no solo te acerca al premio, <br />
          también te convierte en parte de una comunidad que confía, juega y gana.
        </p>
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
            boxShadow: "0 4px 15px rgba(255,102,0,0.5)",
          }}
        />
      </div>

      {/* CONTENEDOR */}
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#ff6600" }}>
          🎟️ Compra tus boletos
        </h2>

        {/* BOLETOS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            margin: "20px 0",
          }}
        >
          <button style={btnCircle} onClick={() => setCantidad(Math.max(2, cantidad - 1))}>
            -
          </button>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}>{cantidad}</span>
          <button style={btnCircle} onClick={() => setCantidad(cantidad + 1)}>
            +
          </button>
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
          <h3 style={{ margin: "25px 0 15px", color: "#ff6600" }}>💳 Métodos de Pago</h3>

          {/* Pago Móvil */}
          <div style={card}>
            <div style={cardHeader}>
              <img src="/provincial.png" alt="Provincial" style={{ height: "25px" }} />
              <button type="button" onClick={() => copiar("04244214965 - CI: 30281789")} style={copyBtn}>
                📋
              </button>
            </div>
            <p style={{ margin: "5px 0" }}>
              Teléfono: <b>04244214965</b> <br />
              C.I: <b>30281789</b>
            </p>
          </div>

          {/* Binance */}
          <div style={card}>
            <div style={cardHeader}>
              <img src="/binance.png" alt="Binance" style={{ height: "25px" }} />
              <button type="button" onClick={() => copiar("ID: 403244297")} style={copyBtn}>
                📋
              </button>
            </div>
            <p style={{ margin: "5px 0" }}>
              ID: <b>403244297</b>
            </p>
          </div>

          {/* COMPROBANTE */}
          <h3 style={{ margin: "30px 0 10px", color: "#ff6600" }}>🧾 Comprobante de Pago</h3>

          <div style={uploadBox}>
            <label htmlFor="comprobante" style={{ cursor: "pointer", textAlign: "center", width: "100%" }}>
              <div style={{ color: "#ff6600", fontWeight: "bold", fontSize: "14px" }}>
                📤 Foto / Captura de Pantalla
              </div>
            </label>
            <input id="comprobante" type="file" accept="image/*" required style={{ display: "none" }} />
          </div>

          <p style={{ marginTop: "10px", fontWeight: "bold", textAlign: "center", color: "#ff6600" }}>
            ⚠️ Recuerda: Debes subir el comprobante para validar tu compra.
          </p>

          <p style={{ marginTop: "15px", fontWeight: "bold", textAlign: "center" }}>
            {total} Bs ({cantidad} boletos)
          </p>

          <button type="submit" style={btnMain}>
            CONFIRMAR
          </button>
        </form>

        {/* === FOOTER === */}
        <footer style={{ marginTop: "40px", textAlign: "center", padding: "20px", borderTop: "1px solid #333" }}>
          <a
            href="https://instagram.com/TU_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff6600", fontSize: "20px", textDecoration: "none" }}
          >
            📷 Sígueme en Instagram
          </a>
        </footer>
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
  border: "1px solid #444",
  borderRadius: "6px",
  fontSize: "14px",
  background: "#111",
  color: "#fff",
};

const label = {
  fontWeight: "bold",
  display: "block",
  marginBottom: "5px",
};

const card = {
  background: "#111",
  padding: "12px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
  marginBottom: "15px",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
};

const copyBtn = {
  background: "transparent",
  border: "none",
  color: "#ff6600",
  fontSize: "18px",
  cursor: "pointer",
};

const uploadBox = {
  border: "2px dashed #444",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  marginBottom: "15px",
};
