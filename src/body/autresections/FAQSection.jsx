import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Nous créons des sites vitrines, e-commerce, des applications web, des interfaces UI/UX et bien plus encore selon vos besoins.",
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "En moyenne 2 à 4 semaines selon la complexité du projet. Un planning précis est fourni avec le devis.",
  },
  {
    question: "Proposez-vous un accompagnement après livraison ?",
    answer:
      "Oui, nous assurons un suivi, des corrections et des évolutions si nécessaire, sur demande.",
  },
  {
    question: "Puis-je modifier le contenu moi-même ensuite ?",
    answer:
      "Absolument, nous intégrons des CMS ou solutions simples pour que vous puissiez gérer vos contenus en toute autonomie.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-20 px-6 lg:px-32">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Questions fréquentes
        </h2>
        <p className="text-gray-600 text-lg">
          Voici les réponses aux questions que nos clients nous posent le plus
          souvent.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  className="px-6 pb-4 text-gray-600 text-sm"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div>{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
