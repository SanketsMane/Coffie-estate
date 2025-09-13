import { CheckCircle, MapPin, Droplets, TreePine, Building, Zap, Star, Route, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimation';

const Features = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2);

  const properties = [
    {
      id: 1,
      title: "22.20 G. Acres - Premium Estate",
      description: "Your gateway to endless opportunities with profitable coffee plantation income from Day One!",
      size: "22.20 Guntha Acres",
      frontage: "750 ft National Highway Frontage",
      features: [
        "Profitable Coffee Plantation - Income from Day One!",
        "750-foot frontage on National Highway 75",
        "Perennial sweet-water canal flowing through",
        "Perfect for educational institution, resort, restaurant, hotel, homestays, petrol bunk",
        "15 minutes from Sakleshpur, 30 minutes from Chavlgere Toll",
        "3-hour drive from Bengaluru"
      ],
      attractions: [
        "Manjarabad Star Fort - 7 km",
        "Mokannana Falls - 22 km",
        "Betta Bhairaveshwara Temple - 41 km",
        "Bisile View Point - 52 km",
        "Kukke Subramanya & Dharmasthala - Short drive"
      ],
      price: "Contact for Details",
      highlight: "Prime Highway Location"
    },
    {
      id: 2,
      title: "5 Acres - Investment Paradise",
      description: "Same exceptional location and connectivity with all the benefits of the premium estate.",
      size: "5 Acres",
      frontage: "Highway Access",
      features: [
        "Profitable Coffee Plantation potential",
        "Access to National Highway 75",
        "Sweet-water canal access",
        "Multiple business opportunities",
        "15 minutes from Sakleshpur",
        "3-hour drive from Bengaluru"
      ],
      attractions: [
        "Manjarabad Star Fort - 7 km",
        "Mokannana Falls - 22 km",
        "Betta Bhairaveshwara Temple - 41 km",
        "Bisile View Point - 52 km",
        "Kukke Subramanya & Dharmasthala - Short drive"
      ],
      price: "Contact for Details",
      highlight: "Perfect Investment Size"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="properties" className="py-20 bg-gradient-to-br from-earth-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            The Divine Valley Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Aura Properties – where nature, business, and opportunity meet. 
            Nestled in lush greenery with endless possibilities on National Highway 75.
          </p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {properties.map((property, index) => (
            <motion.div 
              key={property.id}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-green-400 text-white px-6 py-2 rounded-bl-2xl">
                <span className="text-sm font-semibold">{property.highlight}</span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {property.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {property.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Mountain className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">Size</span>
                    </div>
                    <p className="text-green-700">{property.size}</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Route className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-800">Highway Access</span>
                    </div>
                    <p className="text-blue-700">{property.frontage}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {property.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    Nearby Attractions
                  </h4>
                  <ul className="space-y-2">
                    {property.attractions.map((attraction, idx) => (
                      <li key={idx} className="flex items-start">
                        <MapPin className="h-3 w-3 text-red-500 mr-2 mt-1.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <p className="text-lg font-bold text-green-600">{property.price}</p>
                    </div>
                    <div className="flex gap-3">
                      <motion.a 
                        href="https://wa.me/919035609555?text=Hi, I'm interested in the {property.title} property"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        WhatsApp
                      </motion.a>
                      <motion.a 
                        href="tel:+919035609555"
                        className="border-2 border-green-500 text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Call Now
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Aura Properties – Your Gateway to Opportunity!
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              This isn't just land. It's a canvas for your vision – a hub of possibilities waiting for your touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="tel:+919035609555"
                className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call +91 90356 09555
              </motion.a>
              <motion.a 
                href="https://wa.me/919035609555?text=Hi, I want to know more about Aura Properties"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
