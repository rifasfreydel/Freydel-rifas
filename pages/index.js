export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-32 mb-6" />

      {/* Flyer grande */}
      <img src="/flayer.png" alt="Flyer" className="w-full max-w-md rounded-xl shadow-lg mb-8" />

      {/* Botón central */}
      <a
        href="/comprar"
        className="bg-red-600 text-white text-lg font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-red-700 transition"
      >
        Comprar Tickets
      </a>

      {/* Footer sencillo */}
      <p className="mt-10 text-gray-600 text-sm">
        Sistema de Rifas Freydel © {new Date().getFullYear()}
      </p>
    </div>
  );
}
