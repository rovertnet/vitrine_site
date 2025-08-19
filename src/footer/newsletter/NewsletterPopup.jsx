import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // ✅ Afficher le pop-up toutes les 30 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 30000); // 30s

    return () => clearInterval(interval);
  }, []);

  // ✅ Validation simple email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Veuillez entrer votre email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Adresse email invalide.");
      return;
    }

    console.log("Email envoyé :", email);

    setError(""); // efface l’erreur
    setIsOpen(false); // ferme le pop-up après envoi
    setEmail(""); // réinitialise le champ
  };

  return (
    <div>
      {/* Pop-up */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center mb-4">
                📩 Abonnez-vous à notre Newsletter
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Recevez nos dernières actualités et offres exclusives.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Affichage de l’erreur */}
                {error && (
                  <p className="text-red-600 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  S'abonner
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsletterPopup;
