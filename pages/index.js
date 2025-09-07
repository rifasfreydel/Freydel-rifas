export default function Home() {
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
          <button style={btnCircle}>-</button>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>1</span>
          <button style={btnCircle}>+</button>
        </div>

        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Total: 60 Bs</h3>
        <button style={btnMain}>Confirmar cantidad</button>

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

          {/* COMPROBANTE */}
          <label style={label}>Subir comprobante de pago *</label>
          <input type="file" accept="image/*" required style={input} />

          <button type="submit" style={btnMain}>
            CONFIRMAR
          </button>
        </form>
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
