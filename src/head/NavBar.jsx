import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png"; // Assurez-vous que le chemin est correct

const sections = ["home", "about", "services", "contact"];

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
    setIsOpen(false); // ← Ferme le menu mobile
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // ajuste selon la hauteur de ta navbar
        behavior: "smooth",
      });
    }
  };
  

  return (
    <header className="fixed w-full z-50 top-0 left-0">
      {/* Bandeau supérieur */}
      <div className="bg-blue-700 px-4 md:px-14 py-2.5">
        <div className="flex justify-between items-center text-white text-sm">
          <span className="font-medium">Bienvenu (e) à RovertTech</span>
          <span>Contactez-nous</span>
        </div>
      </div>

      {/* Barre principale */}
      <div className="bg-white px-4 md:px-14 py-4 shadow-md border-b border-gray-200">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <a href="/">
              <img src={logo} alt="logo" className=" w-12 h-12" />
            </a>
          </div>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
            {sections.map((sec) => (
              <li key={sec}>
                <a 
                  href="“#"
                  onClick={() => scrollTo(sec)}
                  className={`block w-full text-left hover:text-gray-900 ${
                    activeSection === sec ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Auth desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Sign Up
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
                  href="/login"
                  className="block text-gray-600 py-2 hover:text-gray-900"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700"
                >
                  Sign Up
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
