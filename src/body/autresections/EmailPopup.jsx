import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquer le scroll quand le popup est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Contenu du pop-up */}
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden relative flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10 text-2xl"
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full h-40 sm:h-52">
              <img
                src="https://rovert-tech.vercel.app/em1.jpg"
                alt="Popup Illustration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Formulaire */}
            <div className="p-5 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Rejoignez notre newsletter
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Entrez votre adresse e‑mail pour recevoir nos dernières
                nouveautés. Vous pouvez ignorer si vous préférez.
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
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition text-sm"
                >
                  S'inscrire
                </button>
              </form>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 text-xs text-gray-500 hover:underline"
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
