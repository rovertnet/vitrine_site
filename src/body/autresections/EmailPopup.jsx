import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Afficher seulement la première fois
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
          className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Contenu du pop-up */}
          <motion.div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl overflow-hidden relative flex flex-col md:flex-row"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10"
            >
              ✕
            </button>

            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src="https://rovert-tech.vercel.app/em1.jpg"
                alt="Popup Illustration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Formulaire */}
            <div className="p-6 md:w-1/2 w-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Rejoignez notre newsletter
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Entrez votre adresse e‑mail pour recevoir nos dernières
                nouveautés et conseils. Vous pouvez ignorer si vous préférez.
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
                  required
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
