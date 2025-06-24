
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-bfcp-pink glow-text cursor-pointer" onClick={() => navigate("/")}>
                BFCP 2025
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('rules')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Rules
                </button>
                <button
                  onClick={() => scrollToSection('episodes')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Episodes
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <button
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Contestant Login
              </button>
              <button
                onClick={() => window.open('https://discord.gg/Mtkb9qxy', '_blank')}
                className="bg-gradient-to-r from-bfcp-purple to-bfcp-pink hover:from-bfcp-purple/80 hover:to-bfcp-pink/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Register The Next Year!
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-lg">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('rules')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
          >
            Rules
          </button>
          <button
            onClick={() => scrollToSection('episodes')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
          >
            Episodes
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white w-full px-4 py-2 rounded-md text-base font-medium mt-2 transition-all duration-300 flex items-center justify-center"
          >
            <User className="w-4 h-4 mr-2" />
            Contestant Login
          </button>
          <button
            onClick={() => window.open('https://discord.gg/Mtkb9qxy', '_blank')}
            className="bg-gradient-to-r from-bfcp-purple to-bfcp-pink hover:from-bfcp-purple/80 hover:to-bfcp-pink/80 text-white w-full px-4 py-2 rounded-md text-base font-medium mt-2 transition-all duration-300"
          >
            Register The Next Year!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
