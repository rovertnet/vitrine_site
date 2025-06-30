import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white pt-48 pb-14 px-6 lg:px-32 text-center lg:text-left">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Donnez vie à votre{" "}
          <span className="text-blue-600">présence en ligne</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Nous concevons des expériences web modernes, performantes et
          sur-mesure pour propulser votre activité.
        </p>
        <div className="flex sm:justify-center sm:items-center justify-center items-center ">
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
              Démarrer maintenant
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-50 transition">
              En savoir plus
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
