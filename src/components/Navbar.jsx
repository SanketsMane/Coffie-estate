import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import auraLogo from '../assets/aura-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">{/* Increased height for bigger logo */}
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={auraLogo} 
              alt="Aura Properties Logo" 
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Contact Options */}
              <div className="flex items-center space-x-3">
                {/* Mobile Number in Box */}
                <div className="bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                  <a
                    href="tel:+919035609555"
                    className="text-green-700 font-medium text-sm hover:text-green-800 transition-colors"
                  >
                    +91 90356 09555
                  </a>
                </div>
                
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919035609555?text=Hi, I'm interested in Aura Properties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+919035609555"
              className="block w-full text-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium mt-4"
            >
              📞 +91 90356 09555
            </a>
            <a
              href="https://wa.me/919035609555?text=Hi, I'm interested in Aura Properties"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium mt-2"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
