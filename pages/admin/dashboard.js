import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { app } from "../../lib/firebase";

const db = getFirestore(app);

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("compras");

  const [compras, setCompras] = useState([]);
  const [boletos, setBoletos] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [config, setConfig] = useState({ precio: 15, minimo: 2 });

  const auth = getAuth(app);
  const router = useRouter();

  // 🔒 Proteger ruta
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/admin/login");
      } else {
        setUser(u);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 🔄 Cargar datos
  useEffect(() => {
    if (user) {
      cargarCompras();
      cargarBoletos();
      cargarRanking();
      cargarConfig();
    }
  }, [user]);

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

  // ✅ Aprobar compra
  const aprobarCompra = async (id) => {
    await updateDoc(doc(db, "compras", id), { aprobado: true });
    cargarCompras();
  };

  // ✅ Cerrar sesión
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Menú de pestañas */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTab("compras")}
          className={tab === "compras" ? "font-bold text-orange-400" : ""}
        >
          Compras
        </button>
        <button
          onClick={() => setTab("boletos")}
          className={tab === "boletos" ? "font-bold text-orange-400" : ""}
        >
          Boletos
        </button>
        <button
          onClick={() => setTab("ranking")}
          className={tab === "ranking" ? "font-bold text-orange-400" : ""}
        >
          Ranking
        </button>
        <button
          onClick={() => setTab("config")}
          className={tab === "config" ? "font-bold text-orange-400" : ""}
        >
          Configuración
        </button>
      </div>

      {/* === Sección 1: Compras pendientes === */}
      {tab === "compras" && (
        <div>
          <h2 className="text-xl mb-4">Compras pendientes</h2>
          {compras.map((c) => (
            <div key={c.id} className="bg-gray-800 p-3 mb-3 rounded">
              <p>
                <b>Nombre:</b> {c.nombre}
              </p>
              <p>
                <b>Correo:</b> {c.correo}
              </p>
              <p>
                <b>Cantidad:</b> {c.cantidad}
              </p>
              <p>
                <b>Total:</b> {c.total} Bs
              </p>
              {c.comprobante && (
                <a
                  href={c.comprobante}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline"
                >
                  Ver comprobante
                </a>
              )}
              {!c.aprobado ? (
                <button
                  onClick={() => aprobarCompra(c.id)}
                  className="mt-2 bg-green-500 px-3 py-1 rounded"
                >
                  Aprobar
                </button>
              ) : (
                <span className="text-green-400">✔ Aprobado</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* === Sección 2: Boletos vendidos === */}
      {tab === "boletos" && (
        <div>
          <h2 className="text-xl mb-4">Boletos vendidos</h2>
          <div className="grid grid-cols-6 gap-2">
            {boletos.map((b) => (
              <div
                key={b.id}
                className={`p-2 rounded text-center ${
                  b.ocupado ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {b.numero}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === Sección 3: Ranking === */}
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

      {/* === Sección 4: Configuración === */}
      {tab === "config" && (
        <div>
          <h2 className="text-xl mb-4">Configuración</h2>
          <p>
            <b>Precio actual:</b> {config.precio} Bs
          </p>
          <p>
            <b>Mínimo de boletos:</b> {config.minimo}
          </p>
        </div>
      )}
    </div>
  );
}
