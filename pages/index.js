Excelente 🚀, te dejo el código listo para que lo coloques en tu proyecto. Está inspirado en el diseño que me mostraste (tipo Dani Do Alves) con logo arriba, flayer grande, botones para cantidad, métodos de pago y subida de comprobante.

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sorteo - Rifa $300</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #fff;
      color: #222;
    }
    header {
      text-align: center;
      padding: 10px;
      background: #ff6600;
    }
    header img.logo {
      height: 50px;
    }
    .flayer {
      width: 100%;
      display: block;
    }
    .container {
      padding: 15px;
    }
    h2 {
      text-align: center;
      margin: 15px 0;
    }
    .tickets {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin: 20px 0;
    }
    .tickets button {
      background: #ff6600;
      border: none;
      color: white;
      font-size: 20px;
      padding: 10px 15px;
      border-radius: 50%;
      cursor: pointer;
    }
    .tickets span {
      font-size: 20px;
      font-weight: bold;
    }
    .btn-confirmar {
      display: block;
      width: 100%;
      padding: 15px;
      background: #ff6600;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin: 15px 0;
    }
    form label {
      font-weight: bold;
      margin-top: 10px;
      display: block;
    }
    form input, form select {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
    .metodos {
      margin: 20px 0;
    }
    .metodo {
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 6px;
      margin-bottom: 10px;
      background: #f9f9f9;
    }
    .upload {
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <header>
    <img src="tu-logo.png" alt="Logo" class="logo">
  </header>

  <img src="tu-flayer.png" alt="Flayer" class="flayer">

  <div class="container">
    <h2>🎟️ Compra tus boletos</h2>

    <!-- SECCIÓN DE BOLETOS -->
    <div class="tickets">
      <button id="menos">-</button>
      <span id="cantidad">1</span>
      <button id="mas">+</button>
    </div>
    <h3 style="text-align:center;">Total: <span id="total">60</span> Bs</h3>
    <button class="btn-confirmar">Confirmar cantidad</button>

    <!-- DATOS PERSONALES -->
    <form>
      <label>Nombres y Apellidos *</label>
      <input type="text" required>

      <label>Teléfono *</label>
      <div style="display:flex; gap:5px;">
        <select>
          <option value="+58">🇻🇪 +58</option>
        </select>
        <input type="tel" required>
      </div>

      <label>Correo *</label>
      <input type="email" required>

      <!-- MÉTODOS DE PAGO -->
      <div class="metodos">
        <h3>💳 Métodos de Pago</h3>

        <div class="metodo">
          <strong>Pago Móvil - Banco Provincial</strong><br>
          Teléfono: <b>04244214965</b><br>
          CI: <b>30281789</b>
        </div>

        <div class="metodo">
          <strong>Binance</strong><br>
          ID: <b>403244297</b>
        </div>
      </div>

      <!-- COMPROBANTE -->
      <div class="upload">
        <label>Subir comprobante de pago *</label>
        <input type="file" accept="image/*" required>
      </div>

      <button type="submit" class="btn-confirmar">CONFIRMAR</button>
    </form>
  </div>

  <script>
    const precio = 60;
    let cantidad = 1;
    const cantidadSpan = document.getElementById("cantidad");
    const totalSpan = document.getElementById("total");

    document.getElementById("mas").addEventListener("click", () => {
      cantidad++;
      actualizar();
    });
    document.getElementById("menos").addEventListener("click", () => {
      if (cantidad > 1) cantidad--;
      actualizar();
    });

    function actualizar() {
      cantidadSpan.textContent = cantidad;
      totalSpan.textContent = cantidad * precio;
    }
  </script>
</body>
</html>

👉 Solo tienes que cambiar:

tu-logo.png → por tu logo.

tu-flayer.png → por tu imagen del sorteo.

Los datos de pago ya puse Pago móvil y Binance como me diste.


¿Quieres que lo prepare en React/Tailwind (para que se vea aún más pro y responsivo) o prefieres mantenerlo en HTML + CSS puro para que sea más fácil de subir a tu hosting actual?

