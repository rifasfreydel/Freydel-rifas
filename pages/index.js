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
  const [verificarCorreo, setVerificarCorreo] = useState("");

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
    <div className="bg-black text-white min-h-screen">
      {/* 🔹 Sección 1: Logo + Flayer */}
      <header className="text-center py-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-24 mb-4" />
        <img src="/flayer.png" alt="Flayer" className="mx-auto rounded-lg shadow-lg w-80 md:w-[500px]" />
      </header>

      {/* 🔹 Sección 2: Formulario de compra */}
      <section className="p-6">
        <h1 className="text-3xl text-orange-500 mb-6 text-center">
          Compra tus boletos 🎟️
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
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

          <div className="flex items-center gap-3 justify-center">
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

          <p className="text-lg text-center">Total: <b>{total} Bs</b></p>

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
      </section>

      {/* 🔹 Sección 3: Progreso + Verificación */}
      <section className="p-6 bg-gray-900 mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">Estado de la Rifa</h2>

        {/* Barra de progreso ejemplo */}
        <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
          <div className="bg-orange-500 h-4 rounded-full" style={{ width: "40%" }}></div>
        </div>
        <p className="text-center mb-6">40% de boletos vendidos</p>

        <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ingresa tu correo para verificar tus tickets"
            value={verificarCorreo}
            onChange={(e) => setVerificarCorreo(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          />
        </div>
      </section>

      {/* 🔹 Sección 4: Footer */}
      <footer className="text-center py-6 text-sm text-gray-400 bg-black mt-6">
        <p>© 2025 Freydel Rifas - Todos los derechos reservados</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/584244214965" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
