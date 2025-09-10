import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState(2);
  const precio = 15;
  const total = cantidad * precio;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#000",
        color: "#f1f1f1",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
      }}
    >
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
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.4",
            marginLeft: "15px",
            color: "#fff",
          }}
        >
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
          <button
            style={btnCircle}
            onClick={() => setCantidad(Math.max(2, cantidad - 1))}
          >
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

          <div style={card}>
            <p style={{ margin: "5px 0" }}>
              <b>Banco Provincial</b> <br />
              Teléfono: <b>04244214965</b> <br />
              C.I: <b>30281789</b>
            </p>
          </div>

          <div style={card}>
            <p style={{ margin: "5px 0" }}>
              <b>Binance</b> <br />
              ID: <b>403244297</b>
            </p>
          </div>

          {/* COMPROBANTE DE PAGO */}
          <h3 style={{ margin: "30px 0 10px", color: "#ff6600" }}>🧾 Comprobante de Pago</h3>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <input type="checkbox" /> Enviar captura inmediatamente
          </label>

          <div style={uploadBox}>
            <label
              htmlFor="comprobante"
              style={{ cursor: "pointer", textAlign: "center", width: "100%" }}
            >
              <div
                style={{
                  color: "#ff6600",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                📤 Foto / Captura de Pantalla
              </div>
            </label>
            <input
              id="comprobante"
              type="file"
              accept="image/*"
              required
              style={{ display: "none" }}
            />
          </div>

          <p
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#ff6600",
            }}
          >
            ⚠️ Recuerda: Debes subir el comprobante para validar tu compra.
          </p>
        </form>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
          background: "#111",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          📍 Valencia, Carabobo, Venezuela <br />
          📞 +58 424 4214965
        </p>
        <a
          href="https://www.instagram.com/freydeljose?igsh=MWllcTEwbnYyaGJ4Nw=="
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ff6600", textDecoration: "none", fontWeight: "bold" }}
        >
          📸 Síguenos en Instagram
        </a>
        <p style={{ marginTop: "15px", fontSize: "12px", color: "#aaa" }}>
          © 2025 Rifa con Freydel. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

/* --- ESTILOS --- */
const btnCircle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "none",
  background: "#ff6600",
  color: "#fff",
  fontSize: "20px",
  cursor: "pointer",
};

const label = {
  display: "block",
  marginTop: "15px",
  marginBottom: "5px",
  fontWeight: "bold",
  color: "#ff6600",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const card = {
  background: "#1a1a1a",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px",
};

const uploadBox = {
  background: "#1a1a1a",
  padding: "20px",
  border: "2px dashed #ff6600",
  borderRadius: "10px",
  textAlign: "center",
  marginTop: "10px",
};
