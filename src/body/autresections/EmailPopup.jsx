import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Vérifier si le popup a déjà été affiché
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Contenu du pop-up */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Rejoignez notre communauté !
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Entrez votre adresse e‑mail pour recevoir nos dernières nouveautés
              (optionnel).
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(false);
                alert("Merci pour votre e‑mail !");
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Votre e‑mail"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
              >
                S'inscrire
              </button>
            </form>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-3 text-sm text-gray-500 hover:underline"
            >
              Fermer sans renseigner
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
