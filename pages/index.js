import { useState } from "react";
import { db, storage } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Home() {
  const [cantidad, setCantidad] = useState(2);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comprobante, setComprobante] = useState(null);

  const precio = 15;
  const total = cantidad * precio;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let comprobanteURL = "";
      if (comprobante) {
        const fileRef = ref(storage, `comprobantes/${Date.now()}_${comprobante.name}`);
        await uploadBytes(fileRef, comprobante);
        comprobanteURL = await getDownloadURL(fileRef);
      }

      await addDoc(collection(db, "compras"), {
        nombre,
        correo,
        telefono,
        cantidad,
        total,
        comprobante: comprobanteURL,
        aprobado: false,
        fecha: new Date(),
      });

      // limpiar formulario
      setNombre("");
      setCorreo("");
      setTelefono("");
      setCantidad(2);
      setComprobante(null);
    } catch (error) {
      console.error("Error guardando compra:", error);
    }
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl text-orange-500 mb-4">Compra tus boletos</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Nombres y Apellidos"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          required
        />

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCantidad(Math.max(2, cantidad - 1))}
            className="px-3 py-1 bg-orange-500 rounded"
          >
            -
          </button>
          <span className="font-bold">{cantidad}</span>
          <button
            type="button"
            onClick={() => setCantidad(cantidad + 1)}
            className="px-3 py-1 bg-orange-500 rounded"
          >
            +
          </button>
        </div>

        <p className="text-lg">Total: <b>{total} Bs</b></p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setComprobante(e.target.files[0])}
          className="w-full"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 p-2 rounded font-bold"
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
}
