import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 ici tu peux envoyer le formulaire vers une API ou EmailJS
    console.log("Données envoyées :", form);
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-32">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contactez-nous
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Discutons de votre projet ou posez-nous vos questions.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Envoyer
        </button>

        {submitted && (
          <p className="text-green-600 mt-4 font-medium">
            ✅ Merci pour votre message ! Nous vous répondrons rapidement.
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default ContactForm;
