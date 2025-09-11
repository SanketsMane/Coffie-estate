import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import auraLogo from '../assets/aura-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={auraLogo} 
                alt="Aura Properties Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A Coffee Sanctuary in the Heart of Sakleshpur! Experience the perfect blend of nature, 
              tranquility, and the finest coffee plantation lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors duration-300">
                  About Estate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <a 
                  href="tel:+919035609555" 
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  +91 90356 09555
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">Sakleshpur, Karnataka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <a 
                  href="mailto:info@auraproperties.com" 
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  info@auraproperties.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Aura Properties. All rights reserved. | Designed with ❤️ for coffee lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
