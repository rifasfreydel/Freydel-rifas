export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-40 mb-6" />

      {/* Flayer */}
      <img
        src="/flayer.png"
        alt="Flayer"
        className="rounded-xl shadow-lg mb-6 max-w-xs"
      />

      {/* Título */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        Bienvenido a la Gran Rifa
      </h1>
      <p className="text-gray-300 text-center max-w-md">
        Participa comprando tus tickets y gana premios increíbles.  
        Selecciona tu opción y sube el comprobante de pago para entrar en el sorteo.
      </p>

      {/* Botón para participar */}
      <a
        href="/comprar"
        className="mt-6 bg-green-500 px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition"
      >
        Participar Ahora
      </a>
    </div>
  );
}
