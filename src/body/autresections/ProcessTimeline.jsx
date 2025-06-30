import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Prise de contact",
    desc: "Nous échangeons sur vos besoins et objectifs.",
  },
  {
    title: "Devis & planification",
    desc: "Vous recevez une proposition détaillée, délais et tarifs.",
  },
  {
    title: "Design & développement",
    desc: "Création visuelle puis développement selon vos retours.",
  },
  {
    title: "Livraison & suivi",
    desc: "Mise en ligne et accompagnement post‑livraison.",
  },
];

export default function ProcessTimelineHorizontal() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-32">
      {/* ---- Titre ---- */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Notre processus
        </h2>
        <p className="text-gray-600 text-lg">
          Découvrez les étapes clés de notre collaboration.
        </p>
      </motion.div>

      {/* ---- Slider Embla ---- */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="min-w-[75%] sm:min-w-[45%] lg:min-w-[25%] bg-white rounded-2xl shadow p-6 flex-shrink-0 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---- Progress dots ---- */}
      <div className="flex justify-center gap-2 mt-8">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === selected ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Étape ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
