// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 text-white flex flex-col">
      {/* Header con logo */}
      <header className="p-6 flex justify-center">
        <img src="/logo.png" alt="Logo" className="h-20" />
      </header>

      {/* Hero principal */}
      <main className="flex flex-col items-center px-4 text-center">
        <img
          src="/flayer.png"
          alt="Flyer principal"
          className="rounded-2xl shadow-xl mb-6 max-w-md"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          ¡Por tan solo 15bs Gánate 300$!
        </h1>
        <p className="text-lg md:text-xl font-semibold text-yellow-300 mb-6">
          Premio Extra: 100$ para el que compre más boletos
        </p>
        <a
          href="#comprar"
          className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-full text-xl shadow-lg hover:bg-yellow-300 transition"
        >
          Comprar Tickets
        </a>
      </main>

      {/* Información */}
      <section id="comprar" className="flex-1 flex flex-col items-center justify-center px-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">Bienvenido a la Gran Rifa</h2>
        <p className="text-center text-lg max-w-xl mb-8">
          Participa comprando tus tickets y gana premios increíbles.
          Selecciona tu opción y sube tu comprobante de pago
          para entrar en el sorteo.
        </p>
        <a
          href="/comprar"
          className="bg-white text-green-700 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          Participar Ahora
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 py-4 mt-12 text-center text-sm">
        FreyDel Rifas © 2025 – Todos los derechos reservados
      </footer>
    </div>
  )
}
