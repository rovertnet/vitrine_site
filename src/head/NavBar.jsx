import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png"; // Assurez-vous que le chemin est correct

const sections = ["Accueil", "A propos", "Services", "Contact"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // === Scroll Spy Logic ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false); // Ferme le menu mobile
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Animation des icônes
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <header className="fixed w-full z-50 top-0 left-0">
      {/* Bandeau supérieur */}
      <div className="bg-blue-700 px-4 md:px-14 py-2.5">
        <div className="flex justify-between items-center text-white text-sm">
          <span className="font-medium">Bienvenu(e) à RovertTech</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Contactez-nous :</span>
            <a
              href="https://wa.me/243XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Phone size={16} className="hover:text-green-400" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={16} className="hover:text-blue-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} className="hover:text-pink-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="hover:text-blue-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={16} className="hover:text-sky-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div className="bg-white px-4 md:px-14 py-4 shadow-md border-b border-gray-200">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <a href="/">
              <img src={logo} alt="logo" className="w-12 h-12" />
            </a>
          </div>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollTo(sec)}
                  className={`block w-full text-left hover:text-gray-900 ${
                    activeSection === sec ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Auth desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Contactez-nous
            </a>
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menu mobile animé */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 space-y-4"
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-2 text-gray-600 font-medium">
                {sections.map((sec) => (
                  <li key={sec}>
                    <button
                      onClick={() => scrollTo(sec)}
                      className={`block w-full text-left hover:text-gray-900 ${
                        activeSection === sec ? "text-blue-600 font-bold" : ""
                      }`}
                    >
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-gray-200">
                <a
                  href="/signup"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700"
                >
                  Contactez-nous
                </a>
              </div>

              {/* Réseaux sociaux animés */}
              <div className="md:flex justify-center gap-4 mt-4 hidden ">
                {[Phone, Facebook, Instagram, Linkedin, Twitter].map(
                  (Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={iconVariants}
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-500"
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
