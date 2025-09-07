import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Comprar() {
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    telefono: "",
    cantidad: "2",
    metodoPago: "pago-movil",
    comprobante: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar en Firebase
      await addDoc(collection(db, "compras"), {
        ...form,
        fecha: serverTimestamp(),
      });

      alert("✅ Compra registrada. Te contactaremos pronto.");
      setForm({
        nombre: "",
        cedula: "",
        correo: "",
        telefono: "",
        cantidad: "2",
        metodoPago: "pago-movil",
        comprobante: null,
      });
    } catch (err) {
      console.error("Error guardando compra:", err);
      alert("❌ Error al guardar la compra");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold mb-4">Comprar Tickets</h2>

        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full p-2 border rounded"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Cédula"
          className="w-full p-2 border rounded"
          value={form.cedula}
          onChange={(e) => setForm({ ...form, cedula: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-2 border rounded"
          value={form.correo}
          onChange={(e) => setForm({ ...form, correo: e.target.value })}
          required
        />

        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full p-2 border rounded"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          required
        />

        <label className="block">Cantidad de tickets:</label>
        <select
          className="w-full p-2 border rounded"
          value={form.cantidad}
          onChange={(e) => setForm({ ...form, cantidad: e.target.value })}
        >
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        <label className="block">Método de pago:</label>
        <select
          className="w-full p-2 border rounded"
          value={form.metodoPago}
          onChange={(e) => setForm({ ...form, metodoPago: e.target.value })}
        >
          <option value="pago-movil">Pago Móvil (Banco Provincial)</option>
          <option value="binance">Binance</option>
        </select>

        {/* Bloque de datos según método */}
        {form.metodoPago === "pago-movil" && (
          <div className="bg-yellow-100 border border-yellow-400 p-4 rounded">
            <h3 className="font-bold mb-2">📌 Pago Móvil</h3>
            <p><strong>Banco:</strong> Provincial</p>
            <p><strong>C.I:</strong> 30281789</p>
            <p><strong>Teléfono:</strong> 04244214965</p>
          </div>
        )}

        {form.metodoPago === "binance" && (
          <div className="bg-green-100 border border-green-400 p-4 rounded">
            <h3 className="font-bold mb-2">📌 Binance</h3>
            <p><strong>ID:</strong> 403244297</p>
          </div>
        )}

        <label className="block">Subir comprobante:</label>
        <input
          type="file"
          className="w-full"
          onChange={(e) => setForm({ ...form, comprobante: e.target.files[0] })}
          required
        />

        <button className="w-full bg-green-500 py-2 text-white font-bold rounded hover:bg-green-600">
          Enviar
        </button>
      </form>
    </div>
  );
}
