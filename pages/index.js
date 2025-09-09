import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState(2);
  const precio = 15; // precio por boleto
  const total = cantidad * precio;

  // Función para copiar al portapapeles
  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto);
    alert("Copiado: " + texto);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#111", color: "#fff" }}>
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "#ff6600",
          padding: "10px 16px",
        }}
      >
        <img src="/logo.png" alt="Logo" style={{ height: "55px", borderRadius: "50%" }} />
        <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "1.2" }}>
          Juega y gana con Freydel<br />
          ¡Tu oportunidad de hacer realidad sueños!
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
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
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
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{cantidad}</span>
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
          <h3 style={{ margin: "25px 0 10px", color: "#ff6600" }}>💳 Métodos de Pago</h3>

          {/* PAGO MÓVIL */}
          <div style={cardBank}>
            <img src="/provincial.png" alt="Provincial" style={{ width: "50px", marginBottom: "8px" }} />
            <strong>Banco Provincial</strong>
            <p>Tipo: Pago móvil</p>
            <p>
              Cédula: 30281789{" "}
              <button onClick={() => copiarTexto("30281789")} style={btnCopy}>📋</button>
            </p>
            <p>
              Teléfono: 04244214965{" "}
              <button onClick={() => copiarTexto("04244214965")} style={btnCopy}>📋</button>
            </p>
            <p>
              Email: rifasfreydel@gmail.com{" "}
              <button onClick={() => copiarTexto("rifasfreydel@gmail.com")} style={btnCopy}>📋</button>
            </p>
            <p style={{ color: "yellow", fontWeight: "bold", marginTop: "10px" }}>
              ⚠️ Colocar referencia completa. Comprobantes incompletos serán rechazados.
            </p>
          </div>

          {/* BINANCE */}
          <div style={cardBank}>
            <img src="/binance.png" alt="Binance" style={{ width: "50px", marginBottom: "8px" }} />
            <strong>Binance</strong>
            <p>
              ID: 403244297{" "}
              <button onClick={() => copiarTexto("403244297")} style={btnCopy}>📋</button>
            </p>
            <p style={{ color: "yellow", fontWeight: "bold", marginTop: "10px" }}>
              ⚠️ Colocar referencia completa. Comprobantes incompletos serán rechazados.
            </p>
          </div>

          {/* COMPROBANTE DE PAGO */}
          <h3 style={{ margin: "30px 0 10px", color: "#ff6600" }}>🧾 Comprobante de Pago</h3>
          <input id="comprobante" type="file" accept="image/*" required style={input} />

          <p style={{ marginTop: "10px", fontWeight: "bold", textAlign: "center" }}>
            Total a pagar: {total} Bs ({cantidad} boletos)
          </p>

          <button type="submit" style={btnMain}>
            CONFIRMAR
          </button>
        </form>

        {/* PROGRESO DE VENTA */}
        <div style={{ marginTop: "30px" }}>
          <p style={{ marginBottom: "5px" }}>42.7% vendido</p>
          <div style={{ width: "100%", background: "#333", borderRadius: "8px" }}>
            <div style={{ width: "42.7%", height: "12px", background: "#6a5acd", borderRadius: "8px" }}></div>
          </div>
        </div>

        {/* VERIFICAR TICKETS */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h3>¿Quieres verificar tus tickets?</h3>
          <p>Ingresa tu correo aquí:</p>
          <input type="email" placeholder="Ingrese email para la verificación..." style={input} />
          <button style={btnMain}>Verificar mis tickets</button>
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
  border: "1px solid #444",
  borderRadius: "6px",
  fontSize: "14px",
  background: "#222",
  color: "#fff",
};

const label = {
  fontWeight: "bold",
  display: "block",
  marginBottom: "5px",
};

const cardBank = {
  background: "#1e1e1e",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  marginBottom: "20px",
};

const btnCopy = {
  background: "none",
  border: "none",
  color: "#ff6600",
  cursor: "pointer",
  fontSize: "16px",
  marginLeft: "8px",
};
