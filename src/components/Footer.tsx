
import { Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-4">BFCP 2025</h3>
            <p className="text-gray-400">
              BFCP 2025 for a CP.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Rules
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Episodes
                </button>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@GDPhoenixKM" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 text-xl transition-all duration-200 hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://discord.gg/Mtkb9qxy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-xl transition-all duration-200 hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Join our Discord for the latest updates and announcements about BFCP!
            </p>
            <button
              onClick={() => window.open('https://discord.gg/Mtkb9qxy', '_blank')}
              className="bg-gradient-to-r from-bfcp-purple to-bfcp-pink hover:from-bfcp-purple/80 hover:to-bfcp-pink/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Join Discord
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 text-sm">
            © 2025 BFCP. Created by PhoenixKM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
