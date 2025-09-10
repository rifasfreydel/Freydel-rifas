import { useEffect } from "react";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { app } from "../../lib/firebase";

const db = getFirestore(app);

export default function Seed() {
  useEffect(() => {
    const seedTickets = async () => {
      try {
        for (let i = 100; i <= 10000; i++) {
          await setDoc(doc(collection(db, "tickets"), i.toString()), {
            numero: i,
            ocupado: false,
          });
        }
        alert("✅ Tickets creados correctamente en Firestore!");
      } catch (error) {
        console.error("Error al crear tickets:", error);
      }
    };

    seedTickets();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Generando tickets...</h1>
      <p>Espera unos segundos, se están creando en Firestore.</p>
    </div>
  );
}
