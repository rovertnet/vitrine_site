import { motion } from "framer-motion";
import { HeartHandshake, Lightbulb, Users } from "lucide-react";

const points = [
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Équipe passionnée",
    text: "Des professionnels engagés qui aiment créer des expériences utiles et belles.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: "Vision innovante",
    text: "Nous anticipons les tendances pour offrir des solutions toujours modernes.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    title: "Approche humaine",
    text: "La communication, l'écoute et la transparence sont au cœur de notre démarche.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-32" id="apropos">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          À propos de nous
        </h2>
        <p className="text-gray-600 text-lg">
          Nous sommes une équipe dédiée à vous aider à construire une présence
          digitale forte et durable.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{point.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm">{point.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
