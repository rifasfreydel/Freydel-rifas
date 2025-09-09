// pages/index.js
import { useState } from "react";

export default function Home() {
  const [tickets, setTickets] = useState(2);
  const price = 15;
  const total = tickets * price;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copiado en portapapeles ✅");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full bg-orange-600 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto rounded-lg shadow-lg"
          />
          <p className="text-sm md:text-base max-w-md">
            <span className="font-bold">Juega y gana con Freydel</span>, cada
            boleto no solo te acerca al premio, sino que también te convierte en
            parte de una comunidad que confía, juega y gana. Tu participación es
            la clave para hacer realidad sueños y vivir la emoción de ganar.{" "}
            <span className="font-bold">¡Asegura tus boletos hoy!</span>
          </p>
        </div>
      </header>

      {/* FLYER */}
      <section className="p-6 text-center">
        <img
          src="/flayer.png"
          alt="Flayer"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </section>

      {/* FORMULARIO */}
      <section className="w-full max-w-lg bg-zinc-900 p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Completa tus datos
        </h2>

        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full p-3 rounded bg-black border border-zinc-700"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full p-3 rounded bg-black border border-zinc-700"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 rounded bg-black border border-zinc-700"
        />
        <input
          type="text"
          placeholder="Cédula"
          className="w-full p-3 rounded bg-black border border-zinc-700"
        />

        {/* Selección de tickets */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setTickets(Math.max(2, tickets - 1))}
            className="px-4 py-2 bg-orange-600 rounded-lg"
          >
            -
          </button>
          <span className="text-lg font-bold">{tickets} boletos</span>
          <button
            onClick={() => setTickets(tickets + 1)}
            className="px-4 py-2 bg-orange-600 rounded-lg"
          >
            +
          </button>
        </div>

        <p className="text-center mt-2">
          Total: <span className="font-bold">{total} Bs</span>
        </p>

        {/* Métodos de pago */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-bold text-center">Métodos de Pago</h3>

          {/* Pago Móvil */}
          <div className="bg-zinc-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <img
                src="/provincial.png"
                alt="Provincial"
                className="h-10 w-auto"
              />
              <button
                onClick={() =>
                  copyToClipboard("Banco Provincial - CI: 30281789 - Tel: 04244214965")
                }
                className="text-sm px-3 py-1 bg-orange-600 rounded-lg"
              >
                Copiar
              </button>
            </div>
            <p className="text-sm mt-2">Banco Provincial</p>
            <p className="text-sm">CI: 30281789</p>
            <p className="text-sm">Tel: 04244214965</p>
          </div>

          {/* Binance */}
          <div className="bg-zinc-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <img
                src="/binance.png"
                alt="Binance"
                className="h-10 w-auto"
              />
              <button
                onClick={() => copyToClipboard("Binance ID: 403244297")}
                className="text-sm px-3 py-1 bg-orange-600 rounded-lg"
              >
                Copiar
              </button>
            </div>
            <p className="text-sm mt-2">ID: 403244297</p>
          </div>
        </div>

        {/* Subida de comprobante */}
        <div className="mt-6">
          <label className="block mb-2 font-bold">Subir comprobante</label>
          <input
            type="file"
            accept="image/*"
            className="w-full text-sm bg-black border border-zinc-700 rounded-lg p-2"
          />
          <p className="text-xs text-red-400 mt-2">
            ⚠️ Recuerda: el comprobante debe estar completo, con todos los
            datos visibles y legibles.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 mb-6 text-center">
        <a
          href="https://instagram.com/TU_USUARIO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 text-orange-500 hover:underline"
        >
          {/* Ícono Instagram en SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.638.407 3.678 1.367c-.96.96-1.236 2.097-1.295 3.374C2.324 6.021 2.311 6.43 2.311 9.689v4.622c0 3.259.013 3.668.072 4.948.059 1.277.335 2.414 1.295 3.374.96.96 2.097 1.236 3.374 1.295 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.414-.335 3.374-1.295.96-.96 1.236-2.097 1.295-3.374.059-1.28.072-1.689.072-4.948V9.689c0-3.259-.013-3.668-.072-4.948-.059-1.277-.335-2.414-1.295-3.374-.96-.96-2.097-1.236-3.374-1.295C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
          <span>Sígueme en Instagram</span>
        </a>
      </footer>
    </div>
  );
}
