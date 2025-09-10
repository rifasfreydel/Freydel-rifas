import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "../../lib/firebase";

const db = getFirestore(app);

export default function Dashboard() {
  const [tab, setTab] = useState("compras");
  const [compras, setCompras] = useState([]);
  const [boletos, setBoletos] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [config, setConfig] = useState({ precio: 15, minimo: 2 });

  useEffect(() => {
    cargarCompras();
    cargarBoletos();
    cargarRanking();
    cargarConfig();
  }, []);

  // =========================
  // 🔹 Firestore: traer datos
  // =========================
  const cargarCompras = async () => {
    const querySnapshot = await getDocs(collection(db, "compras"));
    setCompras(querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const cargarBoletos = async () => {
    const querySnapshot = await getDocs(collection(db, "boletos"));
    setBoletos(querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const cargarRanking = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    const usuarios = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    usuarios.sort((a, b) => (b.totalBoletos || 0) - (a.totalBoletos || 0));
    setRanking(usuarios);
  };

  const cargarConfig = async () => {
    const querySnapshot = await getDocs(collection(db, "config"));
    if (!querySnapshot.empty) {
      setConfig(querySnapshot.docs[0].data());
    }
  };

  // =========================
  // 🔹 Aprobar compra
  // =========================
  const aprobarCompra = async (compra) => {
    const compraRef = doc(db, "compras", compra.id);

    // marcar compra como aprobada
    await updateDoc(compraRef, { estado: "aprobado" });

    // generar boletos aleatorios
    for (let i = 0; i < compra.cantidad; i++) {
      const numero = generarNumero();
      await addDoc(collection(db, "boletos"), {
        numero,
        usuario: compra.correo,
        ocupado: true,
        fecha: serverTimestamp(),
      });
    }

    // actualizar ranking (colección usuarios)
    const userRef = doc(db, "usuarios", compra.correo);
    await setDoc(
      userRef,
      {
        nombre: compra.nombre,
        correo: compra.correo,
        totalBoletos: (compra.cantidad || 0),
      },
      { merge: true }
    );

    cargarCompras();
    cargarBoletos();
    cargarRanking();
  };

  // =========================
  // 🔹 Generar número de boleto
  // =========================
  const generarNumero = () => {
    let num;
    do {
      num = Math.floor(100 + Math.random() * 9900); // entre 0100 y 9999
    } while (String(num).length !== 4);
    return num;
  };

  // =========================
  // 🔹 Render
  // =========================
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      {/* Menú */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("compras")} className={tab === "compras" ? "font-bold text-orange-400" : ""}>Compras</button>
        <button onClick={() => setTab("boletos")} className={tab === "boletos" ? "font-bold text-orange-400" : ""}>Boletos</button>
        <button onClick={() => setTab("ranking")} className={tab === "ranking" ? "font-bold text-orange-400" : ""}>Ranking</button>
        <button onClick={() => setTab("config")} className={tab === "config" ? "font-bold text-orange-400" : ""}>Configuración</button>
      </div>

      {/* 📥 COMPRAS */}
      {tab === "compras" && (
        <div>
          <h2 className="text-xl mb-4">Compras pendientes</h2>
          {compras.map((c) => (
            <div key={c.id} className="bg-gray-800 p-3 mb-3 rounded">
              <p><b>Nombre:</b> {c.nombre}</p>
              <p><b>Correo:</b> {c.correo}</p>
              <p><b>Cantidad:</b> {c.cantidad}</p>
              <p><b>Total:</b> {c.total} Bs</p>
              {c.comprobanteURL && (
                <a href={c.comprobanteURL} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                  Ver comprobante
                </a>
              )}
              {c.estado === "pendiente" ? (
                <button onClick={() => aprobarCompra(c)} className="mt-2 bg-green-500 px-3 py-1 rounded">
                  Aprobar
                </button>
              ) : (
                <span className="text-green-400">✔ Aprobado</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 🎟️ BOLETOS */}
      {tab === "boletos" && (
        <div>
          <h2 className="text-xl mb-4">Boletos vendidos</h2>
          <div className="grid grid-cols-6 gap-2">
            {boletos.map((b) => (
              <div
                key={b.id}
                className={`p-2 rounded text-center ${b.ocupado ? "bg-red-500" : "bg-green-500"}`}
              >
                {b.numero}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ⭐ RANKING */}
      {tab === "ranking" && (
        <div>
          <h2 className="text-xl mb-4">Ranking compradores</h2>
          <ol className="list-decimal ml-6">
            {ranking.map((r) => (
              <li key={r.id} className="mb-2">
                {r.nombre || r.correo} → <b>{r.totalBoletos || 0}</b> boletos
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ⚙️ CONFIG */}
      {tab === "config" && (
        <div>
          <h2 className="text-xl mb-4">Configuración</h2>
          <p><b>Precio actual:</b> {config.precio} Bs</p>
          <p><b>Mínimo de boletos:</b> {config.minimo}</p>
        </div>
      )}
    </div>
  );
}
