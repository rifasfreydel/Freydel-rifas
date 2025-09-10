import { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        loadTickets();
      } else {
        window.location.href = "/admin/login"; // si no está logueado, lo manda al login
      }
    });
    return () => unsubscribe();
  }, []);

  const loadTickets = async () => {
    try {
      const snapshot = await getDocs(collection(db, "tickets"));
      const data = snapshot.docs.map((doc) => doc.data());
      setTickets(data);
    } catch (err) {
      console.error("Error cargando tickets:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin/login";
  };

  if (loading) return <p className="p-4">Cargando...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Tickets</h2>
      <div className="grid grid-cols-6 gap-2">
        {tickets.map((t, i) => (
          <div
            key={i}
            className={`p-2 text-center rounded ${
              t.ocupado ? "bg-red-400 text-white" : "bg-green-400 text-white"
            }`}
          >
            {t.numero}
          </div>
        ))}
      </div>
    </div>
  );
}
