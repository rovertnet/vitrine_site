import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo / Nom */}
        <div>
          <h2 className="text-2xl font-bold mb-2">RovertTech</h2>
        </div>

        {/* Liens */}
        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">
            Accueil
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            A propos
          </a>
          <a href="#services" className="hover:text-blue-400 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
      <p className="text-gray-400 text-sm text-center pt-10">
        © {new Date().getFullYear()} RovertNet. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
