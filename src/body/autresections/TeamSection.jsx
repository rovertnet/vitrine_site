import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const teamMembers = [
  {
    name: "Robert Matundu",
    role: "Développeur Front-end",
    shortBio: "Spécialiste React & UI moderne.",
    longBio:
      "Robert conçoit des interfaces performantes, responsives et accessibles. il travaille sur React, Tailwind CSS et optimise chaque détail UX.",
    image: "https://i.pravatar.cc/150?img=59",
  },
  {
    name: "Plamedie zawadi",
    role: "Designer UI/UX",
    shortBio: "Créateur d’expériences visuelles.",
    longBio:
      "Yann imagine des designs élégants et centrés utilisateur. Il maîtrise Figma, l’identité visuelle, les wireframes et le design system.",
    image: "https://i.pravatar.cc/150?img=56",
  },
  {
    name: "Rabby kikwele",
    role: "Chef de projet",
    shortBio: "Pilote de projets web stratégiques.",
    longBio:
      "Rabby gère les plannings, les équipes et les objectifs client avec méthode. Son expérience garantit des livrables fiables et dans les délais.",
    image: "https://i.pravatar.cc/150?img=57",
  },
  {
    name: "Alice Dupont",
    role: "Développeuse Back-end",
    shortBio: "Experte en bases de données et API.",
    longBio:
      "Alice construit des serveurs robustes et sécurisés. Elle maîtrise Node.js, Express, et les bases de données SQL/NoSQL.",
    image: "https://i.pravatar.cc/150?img=58",
  },
  {
    name: "Sophie Martin",
    role: "Spécialiste SEO",
    shortBio: "Optimisatrice de visibilité web.",
    longBio:
      "Sophie améliore le référencement naturel des sites. Elle analyse les mots-clés, optimise le contenu et suit les performances SEO.",
    image: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Julien Bernard",
    role: "Ingénieur DevOps",
    shortBio: "Automatisation et déploiement continu.",
    longBio:
      "Julien met en place des pipelines CI/CD efficaces. Il gère les infrastructures cloud et assure la scalabilité des applications.",
    image: "https://i.pravatar.cc/150?img=61",
  },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => setSelectedMember(null);

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
          Notre équipe
        </h2>
        <p className="text-gray-600 text-lg">
          Cliquez sur un membre pour en savoir plus.
        </p>
      </motion.div>

      {/* ✅ GRID PC */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedMember(member)}
            className="bg-gray-50 rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-blue-600"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-blue-600 text-sm font-medium">{member.role}</p>
            <p className="text-gray-600 text-sm mt-3">{member.shortBio}</p>
          </motion.button>
        ))}
      </div>

      {/* ✅ CARROUSEL MOBILE */}
      <div className="flex md:hidden overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth px-2">
        {teamMembers.map((member, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedMember(member)}
            className="flex-shrink-0 w-64 bg-gray-50 rounded-2xl shadow p-6 text-center hover:shadow-lg transition snap-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 mx-auto mb-3 rounded-full object-cover border-4 border-blue-600"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-blue-600 text-sm font-medium">{member.role}</p>
            <p className="text-gray-600 text-xs mt-2">{member.shortBio}</p>
          </motion.button>
        ))}
      </div>

      {/* === Modale === */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Contenu */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative z-50">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-blue-600"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedMember.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-600 text-sm mt-4">
                    {selectedMember.longBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
