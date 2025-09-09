// pages/index.js
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center bg-orange-600 px-6 py-4">
        <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-4" />
        <p className="text-lg md:text-xl font-semibold leading-snug">
          Juega y gana con Freydel, cada boleto no solo te acerca al premio,
          sino que también te convierte en parte de una comunidad que confía,
          juega y gana. Tu participación es la clave para hacer realidad sueños
          y vivir la emoción de ganar. ¡Asegura tus boletos hoy y no te quedes
          fuera!
        </p>
      </header>

      {/* Flayer */}
      <section className="w-full flex justify-center mt-6">
        <img
          src="/flayer.png"
          alt="Flayer"
          className="rounded-2xl shadow-lg max-w-md"
        />
      </section>

      {/* Datos Bancarios */}
      <section className="mt-10 w-full max-w-xl px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Métodos de Pago</h2>

        <div className="bg-gray-900 rounded-2xl p-4 mb-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/provincial.png" alt="Provincial" className="h-10" />
              <div>
                <p className="font-semibold">Banco Provincial</p>
                <p>CI: 30281789</p>
                <p>Tel: 04244214965</p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard("Banco Provincial - CI: 30281789 - Tel: 04244214965")}
              className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded-lg text-sm"
            >
              Copiar
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/binance.png" alt="Binance" className="h-10" />
              <div>
                <p className="font-semibold">Binance</p>
                <p>ID: 403244297</p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard("Binance ID: 403244297")}
              className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded-lg text-sm"
            >
              Copiar
            </button>
          </div>
        </div>

        {copied && (
          <p className="text-green-500 text-sm mt-2 text-center">
            ✅ Copiado al portapapeles
          </p>
        )}
      </section>

      {/* Comprobante */}
      <section className="mt-10 w-full max-w-xl px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Subir Comprobante</h2>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-300 
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-600 file:text-white
            hover:file:bg-orange-700
          "
        />
        <p className="text-xs text-gray-400 mt-2">
          ⚠️ Asegúrate de subir tu comprobante completo y legible.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-12 mb-6">
        <a
          href="https://instagram.com/TU_INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-orange-500 hover:text-orange-600"
        >
          {/* Icono Instagram con SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.5 3.9.9c-.9.3-1.6.8-2.3 1.5C.8 3 0.3 3.7 0 4.6c-.4.8-.7 1.8-.8 3.1C-.9 8.9-.9 9.3-.9 12c0 2.7 0 3.1.1 4.3.1 1.3.4 2.3.8 3.1.3.9.8 1.6 1.5 2.3.7.7 1.4 1.2 2.3 1.5.8.4 1.8.7 3.1.8 1.2.1 1.6.1 4.3.1s3.1 0 4.3-.1c1.3-.1 2.3-.4 3.1-.8.9-.3 1.6-.8 2.3-1.5.7-.7 1.2-1.4 1.5-2.3.4-.8.7-1.8.8-3.1.1-1.2.1-1.6.1-4.3s0-3.1-.1-4.3c-.1-1.3-.4-2.3-.8-3.1-.3-.9-.8-1.6-1.5-2.3C20.3.8 19.6.3 18.7 0c-.8-.4-1.8-.7-3.1-.8C14.1-.9 13.7-.9 12-.9c-2.7 0-3.1 0-4.3.1-1.3.1-2.3.4-3.1.8-.9.3-1.6.8-2.3 1.5C.8 3 .3 3.7 0 4.6c-.4.8-.7 1.8-.8 3.1C-.9 8.9-.9 9.3-.9 12c0 2.7 0 3.1.1 4.3.1 1.3.4 2.3.8 3.1.3.9.8 1.6 1.5 2.3.7.7 1.4 1.2 2.3 1.5.8.4 1.8.7 3.1.8 1.2.1 1.6.1 4.3.1s3.1 0 4.3-.1c1.3-.1 2.3-.4 3.1-.8.9-.3 1.6-.8 2.3-1.5.7-.7 1.2-1.4 1.5-2.3.4-.8.7-1.8.8-3.1.1-1.2.1-1.6.1-4.3s0-3.1-.1-4.3c-.1-1.3-.4-2.3-.8-3.1-.3-.9-.8-1.6-1.5-2.3C20.3.8 19.6.3 18.7 0c-.8-.4-1.8-.7-3.1-.8C14.1-.9 13.7-.9 12-.9Z" />
            <circle cx="12" cy="12" r="3.2" />
          </svg>
          <span>Síguenos en Instagram</span>
        </a>
      </footer>
    </div>
  );
}
