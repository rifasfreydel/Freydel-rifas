export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center text-center p-6">
      {/* Logo */}
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="w-48 mb-6"
      />

      {/* Slogan */}
      <h1 className="text-3xl font-extrabold text-white drop-shadow mb-4">
        ¡Participa y gana 300 $ en efectivo!
      </h1>

      {/* Subtexto */}
      <p className="text-lg text-white mb-6">
        ¡Decrétalo, participa y hazlo tuyo con <b>Gana con [Tu Marca]</b>!
      </p>

      {/* Botón Comprar */}
      <a
        href="/comprar"
        className="bg-white text-black font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition mb-10"
      >
        COMPRAR TICKETS
      </a>

      {/* Flyer / Premio */}
      <div className="bg-white rounded-xl shadow-xl p-4 w-full max-w-md">
        <img 
          src="/flyer.png" 
          alt="Premio" 
          className="rounded-xl mb-4"
        />
        <p className="text-xl font-bold text-blue-600">
          ¡GANA 300 $ EN EFECTIVO!
        </p>
        <p className="text-gray-700 mt-2">
          Por tan solo <span className="font-bold">60 Bs</span> <br/>
          (Compra mínima 2 tickets)
        </p>
        <p className="text-gray-800 mt-4">
          Contáctanos: <b>0422-4679026</b>
        </p>
      </div>
    </div>
  );
            }
