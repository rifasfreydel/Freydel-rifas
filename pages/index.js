export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header style={{ textAlign: "center", padding: "10px", background: "#ff6600" }}>
        <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
      </header>

      {/* FLAYER */}
      <img src="/flayer.png" alt="Flayer" style={{ width: "100%", display: "block" }} />

      {/* CONTENEDOR */}
      <div style={{ padding: "15px" }}>
        <h2 style={{ textAlign: "center", margin: "15px 0" }}>🎟️ Compra tus boletos</h2>

        {/* BOLETOS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", margin: "20px 0" }}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <h3 style={{ textAlign: "center" }}>Total: 60 Bs</h3>
        <button style={{ display: "block", width: "100%", padding: "15px", background: "#ff6600", color: "white", border: "none", borderRadius: "8px" }}>
          Confirmar cantidad
        </button>

        {/* FORMULARIO */}
        <form style={{ marginTop: "20px" }}>
          <label>Nombres y Apellidos *</label>
          <input type="text" required style={{ width: "100%", marginBottom: "10px" }} />

          <label>Teléfono *</label>
          <input type="tel" required style={{ width: "100%", marginBottom: "10px" }} />

          <label>Correo *</label>
          <input type="email" required style={{ width: "100%", marginBottom: "10px" }} />

          {/* MÉTODOS DE PAGO */}
          <h3>💳 Métodos de Pago</h3>
          <div style={{ background: "#f9f9f9", padding: "10px", marginBottom: "10px" }}>
            <strong>Pago Móvil - Banco Provincial</strong><br />
            Teléfono: <b>04244214965</b><br />
            CI: <b>30281789</b>
          </div>

          <div style={{ background: "#f9f9f9", padding: "10px", marginBottom: "10px" }}>
            <strong>Binance</strong><br />
            ID: <b>403244297</b>
          </div>

          {/* COMPROBANTE */}
          <label>Subir comprobante de pago *</label>
          <input type="file" accept="image/*" required style={{ width: "100%", marginBottom: "15px" }} />

          <button type="submit" style={{ display: "block", width: "100%", padding: "15px", background: "#ff6600", color: "white", border: "none", borderRadius: "8px" }}>
            CONFIRMAR
          </button>
        </form>
      </div>
    </div>
  );
}
