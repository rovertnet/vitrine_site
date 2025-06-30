import { motion } from "framer-motion";

const logos = [
  {
    name: "Google",
    url: "https://www.google.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    url: "https://www.amazon.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    url: "https://www.netflix.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Microsoft",
    url: "https://www.microsoft.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Airbnb",
    url: "https://www.airbnb.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
];

const scrollVariants = (direction = "left") => ({
  animate: {
    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    },
  },
});

export default function PartnersMarquee() {
  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Nos partenaires
        </h2>
        <p className="text-gray-600 text-lg">
          Cliquez sur un logo pour visiter leur site officiel.
        </p>
      </div>

      <div className="space-y-8">
        {/* Ligne 1 */}
        <motion.div
          className="flex gap-10 items-center w-max"
          variants={scrollVariants("left")}
          animate="animate"
        >
          {[...logos, ...logos].map((partner, i) => (
            <a
              key={`row1-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </a>
          ))}
        </motion.div>

        {/* Ligne 2 */}
        <motion.div
          className="flex gap-10 items-center w-max"
          variants={scrollVariants("right")}
          animate="animate"
        >
          {[...logos, ...logos].map((partner, i) => (
            <a
              key={`row2-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
