import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const services = [
  {
    id: 1,
    name: "Développement web",
    price: "À partir de 500 $",
    description:
      "Création de sites modernes, performants et adaptés à vos besoins.",
  },
  {
    id: 2,
    name: "Conception des APIs",
    price: "À partir de 300 $",
    description:
      "Développement d’APIs sécurisées et évolutives pour vos applications.",
  },
  {
    id: 3,
    name: "Marketing digital",
    price: "À partir de 200 $",
    description:
      "Stratégies digitales pour booster votre visibilité et attirer plus de clients.",
  },
  {
    id: 4,
    name: "Référencement SEO",
    price: "À partir de 150 $",
    description:
      "Optimisation de votre site pour un meilleur positionnement dans Google.",
  },
  {
    id: 5,
    name: "Consultation",
    price: "50 $/heure",
    description:
      "Accompagnement et conseils adaptés à votre projet ou entreprise.",
  },
  {
    id: 6,
    name: "Formation",
    price: "À partir de 100 $/session",
    description:
      "Formations personnalisées pour maîtriser vos outils et technologies.",
  },
];

const TarifsServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOpenPopup = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  // ✅ fonction pour gérer l'envoi
  const onSubmit = (data) => {
    emailjs
      .send(
        "service_nxjmxah", // Service ID
        "template_lxeffid", // Template ID
        {
          from_name: data.from_name,
          from_email: data.from_email,
          message: data.message,
          service: selectedService?.name,
        },
        "cPHGWeChbZcSymYzx" // Public Key
      )
      .then(
        () => {
          toast.success("✅ Message envoyé avec succès !");
          reset();
          setIsOpen(false);
        },
        (error) => {
          toast.error("❌ Une erreur est survenue, réessayez.");
          console.error(error);
        }
      );
  };

  return (
    <section className="py-16 bg-white px-6 lg:px-20" id="tarifs">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          💰 Nos Tarifs & Services
        </h2>
        <p className="text-gray-800 mb-12">
          Choisissez le service qui correspond à vos besoins et demandez un
          devis personnalisé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border border-gray-200 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {svc.name}
              </h3>
              <p className="text-blue-600 font-bold text-2xl mb-4">
                {svc.price}
              </p>
              <p className="text-gray-800 mb-6">{svc.description}</p>
              <button
                onClick={() => handleOpenPopup(svc)}
                className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Demander un devis
              </button>
            </div>
          ))}
        </div>
      </div>

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
                className="absolute top-3 right-3 text-black hover:text-gray-700 text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center text-black mb-4">
                📑 Demande de devis
              </h2>
              <p className="text-center text-gray-800 mb-6">
                Service choisi :{" "}
                <span className="font-semibold">{selectedService?.name}</span>
              </p>

              {/* Formulaire EmailJS */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <input
                  type="hidden"
                  value={selectedService?.name || ""}
                  {...register("service")}
                />

                <input
                  type="text"
                  placeholder="Nom complet"
                  {...register("from_name", { required: true })}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.from_name && (
                  <span className="text-red-500 text-sm">Nom requis</span>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  {...register("from_email", { required: true })}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.from_email && (
                  <span className="text-red-500 text-sm">Email requis</span>
                )}

                <textarea
                  placeholder="Message"
                  {...register("message", { required: true })}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">Message requis</span>
                )}

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Envoyer la demande
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TarifsServices;
