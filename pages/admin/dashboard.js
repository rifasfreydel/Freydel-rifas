import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { app } from "../../lib/firebase";

const db = getFirestore(app);

export default function Dashboard() {
  const [tab, setTab] = useState("compras"); // pestaña activa
  const [compras, setCompras] = useState([]);
  const [boletos, setBoletos] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [config, setConfig] = useState({ precio: 15, minimo: 2 });

  // cargar datos al iniciar
  useEffect(() => {
    cargarCompras();
    cargarBoletos();
    cargarRanking();
    cargarConfig();
  }, []);

  // Firestore: traer compras pendientes
  const cargarCompras = async () => {
    const querySnapshot = await getDocs(collection(db, "compras"));
    setCompras(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // Firestore: traer boletos
  const cargarBoletos = async () => {
    const querySnapshot = await getDocs(collection(db, "boletos"));
    setBoletos(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // Firestore: traer ranking
  const cargarRanking = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    const usuarios = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // ordenar por cantidad de boletos
    usuarios.sort((a, b) => (b.totalBoletos || 0) - (a.totalBoletos || 0));
    setRanking(usuarios);
  };

  // Firestore: traer configuración
  const cargarConfig = async () => {
    const querySnapshot = await getDocs(collection(db, "config"));
    if (!querySnapshot.empty) {
      setConfig(querySnapshot.docs[0].data());
    }
  };

  // aprobar compra → marcar como pagado
  const aprobarCompra = async (id) => {
    await updateDoc(doc(db, "compras", id), { aprobado: true });
    cargarCompras();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Panel de Administración</h1>

      {/* Menú de pestañas */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("compras")} className={tab === "compras" ? "font-bold text-orange-400" : ""}>📥 Compras</button>
        <button onClick={() => setTab("boletos")} className={tab === "boletos" ? "font-bold text-orange-400" : ""}>🎟️ Boletos</button>
        <button onClick={() => setTab("ranking")} className={tab === "ranking" ? "font-bold text-orange-400" : ""}>⭐ Ranking</button>
        <button onClick={() => setTab("config")} className={tab === "config" ? "font-bold text-orange-400" : ""}>⚙️ Configuración</button>
      </div>

      {/* Sección 1: Compras pendientes */}
      {tab === "compras" && (
        <div>
          <h2 className="text-xl mb-4">📥 Compras pendientes</h2>
          {compras.map((c) => (
            <div key={c.id} className="bg-gray-800 p-3 mb-3 rounded">
              <p><b>Nombre:</b> {c.nombre}</p>
              <p><b>Correo:</b> {c.correo}</p>
              <p><b>Cantidad:</b> {c.cantidad}</p>
              <p><b>Total:</b> {c.total} Bs</p>
              {c.comprobante && (
                <a href={c.comprobante} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                  Ver comprobante
                </a>
              )}
              {!c.aprobado ? (
                <button onClick={() => aprobarCompra(c.id)} className="mt-2 bg-green-500 px-3 py-1 rounded">Aprobar ✅</button>
              ) : (
                <span className="text-green-400">✔️ Aprobado</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Sección 2: Boletos vendidos */}
      {tab === "boletos" && (
        <div>
          <h2 className="text-xl mb-4">🎟️ Boletos</h2>
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

      {/* Sección 3: Ranking */}
      {tab === "ranking" && (
        <div>
          <h2 className="text-xl mb-4">⭐ Ranking compradores</h2>
          <ol className="list-decimal ml-6">
            {ranking.map((r, i) => (
              <li key={r.id} className="mb-2">
                {r.nombre || r.correo} → <b>{r.totalBoletos || 0}</b> boletos
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Sección 4: Configuración */}
      {tab === "config" && (
        <div>
          <h2 className="text-xl mb-4">⚙️ Configuración</h2>
          <p><b>Precio actual:</b> {config.precio} Bs</p>
          <p><b>Mínimo de boletos:</b> {config.minimo}</p>
        </div>
      )}
    </div>
  );
}
