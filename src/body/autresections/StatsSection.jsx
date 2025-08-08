import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Projets réalisés", value: 120 },
  { label: "Clients satisfaits", value: 96, suffix: "%" },
  { label: "Années d'expérience", value: 5 },
  { label: "Pays desservis", value: 12 },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-32">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nos chiffres parlent pour nous
        </h2>
        <p className="text-gray-600 text-lg">
          Quelques statistiques sur notre parcours et nos résultats.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp
                end={item.value}
                duration={7}
                suffix={item.suffix || ""}
              />
            </h3>
            <p className="text-gray-700 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
