import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-700 to-black p-6">
      <Image src="/logo.png" alt="Logo" width={150} height={150} className="mb-4" />
      <Image src="/flayer.png" alt="Flayer" width={400} height={200} className="mb-6" />

      <h1 className="text-3xl font-bold mb-6">¡Bienvenido al Sorteo!</h1>
      <Link href="/comprar">
        <button className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl shadow-lg hover:bg-green-400">
          Participar
        </button>
      </Link>
    </div>
  );
    }
