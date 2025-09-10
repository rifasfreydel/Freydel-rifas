import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  writeBatch,
} from "firebase/firestore";
import { app } from "../../lib/firebase";

const db = getFirestore(app);

export default function Seed() {
  const [status, setStatus] = useState("⏳ Creando tickets...");

  useEffect(() => {
    const seedTickets = async () => {
      try {
        const batchSize = 500; // máximo por batch
        let batch = writeBatch(db);
        let count = 0;

        for (let i = 100; i <= 10000; i++) {
          const ref = doc(collection(db, "tickets"), i.toString());
          batch.set(ref, { numero: i, ocupado: false });
          count++;

          // cuando llegamos a 500, ejecutamos el batch
          if (count === batchSize) {
            await batch.commit();
            batch = writeBatch(db);
            count = 0;
          }
        }

        // commit final si quedan docs pendientes
        if (count > 0) {
          await batch.commit();
        }

        setStatus("✅ Tickets creados correctamente en Firestore!");
      } catch (error) {
        console.error("Error al crear tickets:", error);
        setStatus("❌ Error al crear tickets");
      }
    };

    seedTickets();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Generando tickets...</h1>
      <p>{status}</p>
    </div>
  );
}
