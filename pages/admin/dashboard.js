import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function Dashboard() {
  const [tab, setTab] = useState("compras");
  const [compras, setCompras] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [config, setConfig] = useState({ precio: 15, minimo: 2 });

  useEffect(() => {
    cargarCompras();
    cargarTickets();
    cargarRanking();
    cargarConfig();
  }, []);

  const cargarCompras = async () => {
    const querySnapshot = await getDocs(collection(db, "compras"));
    setCompras(querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const cargarTickets = async () => {
    const querySnapshot = await getDocs(collection(db, "tickets"));
    setTickets(querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
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

  const aprobarCompra = async (id) => {
    await updateDoc(doc(db, "compras", id), { aprobado: true });
    cargarCompras();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("compras")} className={tab === "compras" ? "font-bold text-orange-400" : ""}>Compras</button>
        <button onClick={() => setTab("tickets")} className={tab === "tickets" ? "font-bold text-orange-400" : ""}>Tickets</button>
        <button onClick={() => setTab("ranking")} className={tab === "ranking" ? "font-bold text-orange-400" : ""}>Ranking</button>
        <button onClick={() => setTab("config")} className={tab === "config" ? "font-bold text-orange-400" : ""}>Configuración</button>
      </div>

      {/* Compras */}
      {tab === "compras" && (
        <div>
          <h2 className="text-xl mb-4">Compras pendientes</h2>
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
                <button onClick={() => aprobarCompra(c.id)} className="mt-2 bg-green-500 px-3 py-1 rounded">
                  Aprobar
                </button>
              ) : (
                <span className="text-green-400">Aprobado</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tickets */}
      {tab === "tickets" && (
        <div>
          <h2 className="text-xl mb-4">Tickets</h2>
          <div className="grid grid-cols-6 gap-2">
            {tickets.map((t) => (
              <div key={t.id} className={`p-2 rounded text-center ${t.ocupado ? "bg-red-500" : "bg-green-500"}`}>
                {t.numero}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ranking */}
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

      {/* Configuración */}
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
