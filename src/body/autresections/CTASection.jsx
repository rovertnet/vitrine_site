import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ou <a href="#contact"> selon ton routing

const CTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 lg:px-32">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à donner vie à votre projet ?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Que vous ayez besoin d’un site vitrine, d’une refonte ou d’un
          accompagnement digital, nous sommes là pour vous.
        </p>

        <Link
          to="/contact" // ou href="#contact" selon ton système
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Travaillons ensemble
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
