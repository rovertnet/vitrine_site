import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Entrepreneure",
    comment:
      "Une équipe à l'écoute, un site superbe livré dans les délais. Je recommande sans hésiter !",
    rating: 5,
  },
  {
    name: "Michel K.",
    role: "Directeur marketing",
    comment:
      "Leur expertise technique nous a permis de transformer notre présence digitale.",
    rating: 4,
  },
  {
    name: "Claire M.",
    role: "Indépendante",
    comment:
      "Professionnels, rapides et humains. Un vrai plaisir de collaborer avec eux.",
    rating: 5,
  },
];

const TestimonialsEmbla = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-32">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-gray-600 text-lg">
          Des témoignages réels de ceux qui nous ont fait confiance.
        </p>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33%] flex-shrink-0 bg-white rounded-2xl shadow-md border border-gray-200 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{item.comment}"</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots de navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`w-3 h-3 rounded-full ${
              i === selectedIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsEmbla;
