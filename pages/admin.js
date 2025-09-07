import { useState } from "react";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (pass === "admin123") setLogged(true);
    else alert("Clave incorrecta");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {!logged ? (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Acceso Admin</h2>
          <input
            type="password"
            placeholder="Clave"
            className="w-full p-2 mb-4 text-black rounded"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 py-2 rounded font-bold"
          >
            Entrar
          </button>
        </div>
      ) : (
        <h1 className="text-2xl">Bienvenido Admin (demo)</h1>
      )}
    </div>
  );
        }
