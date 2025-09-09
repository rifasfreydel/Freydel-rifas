import { useState } from "react";

export default function Home() {
  const [tickets, setTickets] = useState(2);
  const price = 15;
  const total = tickets * price;

  const handleTickets = (value) => {
    if (value < 2) return; // mínimo 2 boletos
    setTickets(value);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER */}
      <header className="flex flex-col items-center py-6">
        <img src="/logo.png" alt="Logo" className="w-28 mb-4" />
        <h1 className="text-2xl font-bold text-center">
          🎟️ Juega y Gana con Freydel
        </h1>
        <p className="text-gray-400 text-center max-w-lg mt-2 px-4">
          Cada boleto no solo te acerca al premio, sino que también te convierte
          en parte de una comunidad que confía, juega y gana. ¡Asegura tus boletos
          hoy y no te quedes fuera!
        </p>
      </header>

      {/* FLYER */}
      <section className="flex justify-center mb-6">
        <img src="/flayer.png" alt="Flayer" className="rounded-lg shadow-lg w-80" />
      </section>

      {/* FORMULARIO DE COMPRA */}
      <section className="bg-gray-900 rounded-xl max-w-md mx-auto p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Participa en la Rifa
        </h2>

        {/* Datos */}
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="email"
          placeholder="Correo"
          className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="text"
          placeholder="Cédula"
          className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-700"
        />

        {/* Selección de boletos */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => handleTickets(tickets - 1)}
            className="bg-gray-700 px-4 py-2 rounded"
          >
            -
          </button>
          <span className="text-lg">{tickets} boletos</span>
          <button
            onClick={() => handleTickets(tickets + 1)}
            className="bg-gray-700 px-4 py-2 rounded"
          >
            +
          </button>
        </div>

        {/* Total */}
        <p className="text-center text-lg font-semibold mb-4">
          Total: {total} Bs
        </p>

        {/* Métodos de pago */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Métodos de Pago</h3>
          <div className="bg-gray-800 p-3 rounded mb-2">
            <p className="text-sm">📱 Pago Móvil</p>
            <p className="text-sm">Banco Provincial</p>
            <p className="text-sm">CI: 30281789</p>
            <p className="text-sm">Tel: 04244214965</p>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <p className="text-sm">💰 Binance</p>
            <p className="text-sm">ID: 403244297</p>
          </div>
        </div>

        {/* Subir comprobante */}
        <div className="mb-4">
          <label className="block mb-1 text-sm">
            Sube tu comprobante de pago
          </label>
          <input
            type="file"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <p className="text-xs text-gray-400 mt-1">
            ⚠️ Importante: El comprobante será revisado antes de asignar tus
            números.
          </p>
        </div>

        {/* Botón */}
        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
          Enviar
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Freydel Rifas. Todos los derechos reservados.
      </footer>
    </div>
  );
}
