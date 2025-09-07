import { useState } from "react";

export default function Comprar() {
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    telefono: "",
    cantidad: "2",
    comprobante: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado (demo). Después guardamos en Firebase.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold mb-4">Comprar Tickets</h2>

        <input type="text" placeholder="Nombre completo" className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />

        <input type="text" placeholder="Cédula" className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, cedula: e.target.value })} required />

        <input type="email" placeholder="Correo" className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, correo: e.target.value })} required />

        <input type="tel" placeholder="Teléfono" className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, telefono: e.target.value })} required />

        <label className="block">Cantidad de tickets:</label>
        <select className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, cantidad: e.target.value })}>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        <label className="block">Subir comprobante:</label>
        <input type="file" className="w-full"
          onChange={(e) => setForm({ ...form, comprobante: e.target.files[0] })} required />

        <button className="w-full bg-green-500 py-2 text-white font-bold rounded hover:bg-green-600">
          Enviar
        </button>
      </form>
    </div>
  );
    }
