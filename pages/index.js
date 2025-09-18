import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [tickets, setTickets] = useState(2);
  const price = 15;
  const total = tickets * price;

  const handleTickets = (type) => {
    if (type === "add") setTickets(tickets + 1);
    if (type === "sub" && tickets > 2) setTickets(tickets - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="font-bold text-lg">Rifa Resolve</h1>
        </div>
        <a href="#compra" className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition">
          Participar
        </a>
      </header>

      {/* Hero / Flayer */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center p-6"
      >
        <Image src="/flayer.png" alt="Flayer" width={400} height={400} className="rounded-xl shadow-lg" />
        <h2 className="mt-4 text-3xl font-extrabold">¡Participa y gana 300$!</h2>
        <p className="text-gray-600 text-lg">Boletos desde solo 15 Bs</p>
        <a href="#compra" className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:scale-110 transition">
          Comprar boletos
        </a>
      </motion.section>

      {/* Info de la rifa */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white p-6 max-w-xl mx-auto rounded-xl shadow-md mb-8"
      >
        <h3 className="text-xl font-bold mb-2">Detalles de la Rifa</h3>
        <p>🎁 Premio: <span className="font-semibold">300$</span></p>
        <p>💵 Valor: <span className="font-semibold">15 Bs</span> por boleto</p>
        <p>🎲 Sortea: Lotería Saper Gana</p>
      </motion.section>

      {/* Compra de boletos */}
      <motion.section
        id="compra"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white p-6 max-w-xl mx-auto rounded-xl shadow-md mb-8"
      >
        <h3 className="text-xl font-bold mb-4">Compra tus boletos</h3>

        {/* Contador dinámico */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => handleTickets("sub")} className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">-</button>
          <motion.span
            key={tickets}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-lg font-semibold"
          >
            {tickets}
          </motion.span>
          <button onClick={() => handleTickets("add")} className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">+</button>
        </div>

        <p className="text-lg font-semibold mb-4">Total: {total} Bs</p>

        {/* Formulario */}
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Nombre y Apellido" className="border p-2 rounded" />
          <input type="email" placeholder="Correo" className="border p-2 rounded" />
          <input type="text" placeholder="Teléfono" className="border p-2 rounded" />
          <input type="text" placeholder="Cédula" className="border p-2 rounded" />

          {/* Métodos de pago */}
          <div className="bg-gray-100 p-3 rounded">
            <p className="font-semibold mb-2">Métodos de Pago</p>
            <p>📱 Pago Móvil (Provincial) <br /> CI: 30.281.789 <br /> Tel: 04244214965</p>
            <p className="mt-2">💳 Binance ID: 403244297</p>
          </div>

          {/* Subida de comprobante */}
          <input type="file" className="border p-2 rounded" />

          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:scale-105 hover:bg-green-700 transition">
            Enviar solicitud
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500">
        © 2025 Rifa Resolve. Todos los derechos reservados.
      </footer>
    </div>
  );
}
