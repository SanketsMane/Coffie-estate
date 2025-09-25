import { Mail, Phone, MapPin, Globe, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Aura Properties</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premium Coffee Estate Properties in the heart of Sakleshpur. Your gateway to profitable real estate investments with strategic highway connectivity.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-green-400" />
                <a 
                  href="https://www.auraproperties.in" 
                  className="text-green-400 hover:text-green-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.auraproperties.in
                </a>
              </div>
            </div>
          </div>

          {/* Property Options */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Properties</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/property/22-acres" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  22.20 Acres Premium Estate
                </Link>
              </li>
              <li>
                <Link 
                  to="/property/11-acres" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  11.30 Acres Compact Excellence
                </Link>
              </li>
              <li>
                <Link 
                  to="/property/5-acres" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  5.06 Acres Smart Investment
                </Link>
              </li>
              <li>
                <Link 
                  to="/properties" 
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
                >
                  View All Properties →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+919035609555" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    +91 90356 09555
                  </a>
                  <span className="text-gray-400 text-sm">Primary Contact</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@auraproperties.in" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    info@auraproperties.in
                  </a>
                  <span className="text-gray-400 text-sm">General Inquiries</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 block">Sakleshpur, Karnataka</span>
                  <span className="text-gray-400 text-sm">Property Location</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 block">Mon - Sat: 9 AM - 6 PM</span>
                  <span className="text-gray-400 text-sm">Business Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Office Address</h3>
            <div className="text-gray-300 space-y-1 mb-4">
              <p className="font-semibold text-white">Aura Properties</p>
              <p>#165, 2nd Floor</p>
              <p>8th Main Road, B.E.M.L Layout</p>
              <p>Opp J.V.S School, Last Bus Stop</p>
              <p>Basaveshwara Nagar</p>
              <p>Bangalore - 560079</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <a href="tel:+919035609555" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 90356 09555
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@auraproperties.in" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@auraproperties.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 text-sm">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/properties" className="text-gray-300 hover:text-white transition-colors text-sm">
                Properties
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://wa.me/919035609555?text=Hi, I'm interested in Aura Properties" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                WhatsApp Inquiry
              </a>
              <a 
                href="tel:+919035609555" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Aura Properties. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>GSTIN: 29ABXFS4314D1ZU</span>
              <span>•</span>
              <a href="https://www.auraproperties.in" className="hover:text-white transition-colors">
                www.auraproperties.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
