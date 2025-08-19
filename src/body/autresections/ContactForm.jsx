import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Fonction pour envoyer les données via EmailJS
const sendContactForm = async (data) => {
  return emailjs.send(
    "service_x123abc", // Remplace par ton Service ID
    "template_abcd123", // Remplace par ton Template ID
    data,
    "8FhD_abcXYZ" // Remplace par ta Public Key
  );
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: sendContactForm,
    onSuccess: () => reset(),
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-32" id="contact">
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
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Nom complet */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            {...register("from_name", {
              required: "Vous êtes obligé de renseigner votre nom.",
            })}
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
          />
          {errors.from_name && (
            <p className="text-red-600 text-sm mt-1">
              {errors.from_name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            {...register("from_email", {
              required: "Vous devez renseigner votre email.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Adresse email est invalide.",
              },
            })}
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
          />
          {errors.from_email && (
            <p className="text-red-600 text-sm mt-1">
              {errors.from_email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message", {
              required: "Vous êtes obligé de nous dire quelque chose",
            })}
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Bouton */}
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
        >
          {mutation.isLoading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {/* Feedback */}
        {mutation.isSuccess && (
          <p className="text-green-600 mt-4 font-medium">
            ✅ Merci pour votre message ! Nous vous répondrons rapidement.
          </p>
        )}
        {mutation.isError && (
          <p className="text-red-600 mt-4 font-medium">
            ❌ Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </motion.form>
    </section>
  );
}
