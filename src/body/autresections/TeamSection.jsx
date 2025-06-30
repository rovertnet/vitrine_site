import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Lemoine",
    role: "Développeuse Front-end",
    shortBio: "Spécialiste React & UI moderne.",
    longBio:
      "Sarah conçoit des interfaces performantes, responsives et accessibles. Elle travaille sur React, Tailwind CSS et optimise chaque détail UX.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Yann Mumba",
    role: "Designer UI/UX",
    shortBio: "Créateur d’expériences visuelles.",
    longBio:
      "Yann imagine des designs élégants et centrés utilisateur. Il maîtrise Figma, l’identité visuelle, les wireframes et le design system.",
    image: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Claire Makiadi",
    role: "Cheffe de projet",
    shortBio: "Pilote de projets web stratégiques.",
    longBio:
      "Claire gère les plannings, les équipes et les objectifs client avec méthode. Son expérience garantit des livrables fiables et dans les délais.",
    image: "https://i.pravatar.cc/150?img=11",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
