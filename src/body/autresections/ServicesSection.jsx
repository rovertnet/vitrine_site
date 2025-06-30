import { motion } from "framer-motion";
import { Rocket, Code, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "Lancement rapide",
    description:
      "Nous construisons des sites performants, livrés en un temps record sans sacrifier la qualité.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Développement sur-mesure",
    description:
      "Chaque projet est unique. Nous développons selon vos besoins spécifiques et vos objectifs.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Sécurité et fiabilité",
    description:
      "Votre site est protégé, fiable, optimisé pour durer avec une maintenance simple.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-32">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ce que nous faisons
        </h2>
        <p className="text-gray-600 text-lg">
          Nous aidons nos clients à concrétiser leurs idées à travers des
          solutions web modernes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
