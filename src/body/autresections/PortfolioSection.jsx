import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    title: "Site e-commerce",
    description:
      "Développé avec React et Stripe pour une boutique en ligne performante.",
    details:
      "Ce projet comprend un système de panier, paiement sécurisé, gestion d'inventaire et interface admin.",
    image: "https://rovert-tech.vercel.app/p1.jpg",
    link: "#",
    category: "E-commerce",
  },
  {
    title: "Portfolio personnel",
    description: "Un site vitrine responsive et élégant.",
    details:
      "Conception de A à Z avec animation, navigation fluide, SEO et hébergement optimisé.",
    image: "https://rovert-tech.vercel.app/p2.jpg",
    link: "#",
    category: "Vitrine",
  },
  {
    title: "Landing SaaS",
    description: "Page d'atterrissage hautement convertible.",
    details:
      "Contient des sections marketing, appel à l'action, formulaire intégré, responsive design.",
    image: "https://rovert-tech.vercel.app/p3.jpg",
    link: "#",
    category: "Landing",
  },
  {
    title: "Blog tech",
    description: "Plateforme de blog moderne avec CMS headless.",
    details:
      "Fonctionnalités de publication, gestion des utilisateurs, commentaires et design épuré.",
    image: "https://rovert-tech.vercel.app/p4.png",
    link: "#",
    category: "Vitrine",
  },
  {
    title: "Application de gestion",
    description: "Outil web pour la gestion de projets et tâches.",
    details:
      "Tableaux de bord, collaboration en temps réel, notifications et intégrations tierces.",
    image: "https://rovert-tech.vercel.app/p5.png",
    link: "#",
    category: "E-commerce",
  },
  {
    title: "Site événementiel",
    description: "Site web pour la promotion d'événements.",
    details:
      "Calendrier interactif, inscription en ligne, galerie média et optimisation mobile.",
    image: "https://rovert-tech.vercel.app/P6.png",
    link: "#",
    category: "Landing",
  },
  {
    title: "Application de recettes",
    description: "Plateforme pour découvrir et partager des recettes.",
    details:
      "Recherche avancée, favoris, commentaires et interface utilisateur intuitive.",
    image: "https://rovert-tech.vercel.app/p7.png",
    link: "#",
    category: "Vitrine",
  },
  {
    title: "Site de voyage",
    description: "Site web pour agences de voyage et tours.",
    details:
      "Itinéraires, réservations en ligne, témoignages clients et design immersif.",
    image: "https://rovert-tech.vercel.app/p8.png",
    link: "#",
    category: "E-commerce",
  },
  {
    title: "Application fitness",
    description: "Outil pour suivre les entraînements et la nutrition.",
    details:
      "Plans d'entraînement, suivi des progrès, conseils nutritionnels et communauté intégrée.",
    image: "https://rovert-tech.vercel.app/p9.png",
    link: "#",
    category: "Landing",
  }
];

const categories = ["Tous", "E-commerce", "Vitrine", "Landing"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white py-20 px-6 lg:px-32">
      {/* Titre + Filtres */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nos Réalisations
        </h2>
        <p className="text-gray-600 text-lg">
          Cliquez sur un projet pour voir plus de détails.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille projets */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="cursor-pointer rounded-2xl overflow-hidden shadow border border-gray-200 hover:shadow-md transition"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white max-w-lg w-full rounded-xl overflow-hidden shadow-lg relative p-6"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedProject.details}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Voir le projet
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
