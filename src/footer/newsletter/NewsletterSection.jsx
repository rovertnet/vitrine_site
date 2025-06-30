import { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 Ici tu peux envoyer l’email vers un service externe
    console.log("Email soumis :", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-blue-50 py-20 px-6 lg:px-32">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Abonnez-vous à notre newsletter
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Recevez nos actualités, offres et conseils directement dans votre
          boîte mail.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl w-full sm:w-auto flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-medium"
          >
            S’abonner
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-4 font-medium">
            ✅ Merci pour votre inscription !
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
