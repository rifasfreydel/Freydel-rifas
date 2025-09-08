import { useState } from "react";

export default function Home() {
  const [tickets, setTickets] = useState(2);
  const [bank, setBank] = useState(null);
  const [file, setFile] = useState(null);

  const pricePerTicket = 15;
  const total = tickets * pricePerTicket;

  const quickAdd = [2, 10, 20, 50, 100];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🎟️ Combo Gárgola</h1>

      {/* Selección de Tickets */}
      <h2 className="text-xl mb-3">¿Cuántos tickets quieres?</h2>
      <div className="flex gap-3 mb-4">
        {quickAdd.map((q) => (
          <button
            key={q}
            className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700"
            onClick={() => setTickets(tickets + q)}
          >
            +{q}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-6">
        <button
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
          onClick={() => setTickets(Math.max(2, tickets - 1))}
        >
          -
        </button>
        <span className="text-2xl font-bold">{tickets} boletos</span>
        <button
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
          onClick={() => setTickets(tickets + 1)}
        >
          +
        </button>
      </div>

      {/* Total */}
      <p className="text-lg font-semibold mb-8">
        Total: <span className="text-green-400">{total} Bs</span>
      </p>

      {/* Selección de banco */}
      <h2 className="text-xl mb-3">¿A dónde quieres transferir?</h2>
      <div className="flex gap-6 mb-6">
        <button
          className={`p-3 rounded-xl border ${
            bank === "BNC" ? "border-green-400" : "border-gray-600"
          }`}
          onClick={() => setBank("BNC")}
        >
          🏦 BNC
        </button>
        <button
          className={`p-3 rounded-xl border ${
            bank === "Zelle" ? "border-green-400" : "border-gray-600"
          }`}
          onClick={() => setBank("Zelle")}
        >
          💵 Zelle
        </button>
        <button
          className={`p-3 rounded-xl border ${
            bank === "Binance" ? "border-green-400" : "border-gray-600"
          }`}
          onClick={() => setBank("Binance")}
        >
          🟡 Binance
        </button>
      </div>

      {bank && (
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold">Detalles de {bank}:</p>
          {bank === "BNC" && <p>Cuenta: 0102-xxxx-xxxx-xxxx</p>}
          {bank === "Zelle" && <p>Email: ejemplo@zelle.com</p>}
          {bank === "Binance" && <p>USDT Wallet: xxxxxx</p>}
        </div>
      )}

      {/* Comprobante */}
      <h2 className="text-xl font-bold mb-3">📄 Comprobante de pago</h2>
      <label className="border-2 border-dashed border-gray-400 rounded-xl p-6 w-full text-center cursor-pointer mb-4">
        <input
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p className="text-gray-400">📷 Sube tu captura aquí</p>
        )}
      </label>

      <p className="text-gray-400 text-sm mb-6">
        BANESCO: <span className="text-white">{total} Bs</span> ({tickets} boletos)
      </p>

      {/* Confirmar */}
      <p className="text-xs text-gray-400 mb-3">
        Al confirmar autorizo el uso de <span className="text-orange-400">Mis Datos Personales</span>
      </p>

      <button className="bg-orange-500 text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-600">
        CONFIRMAR
      </button>
    </div>
  );
}
