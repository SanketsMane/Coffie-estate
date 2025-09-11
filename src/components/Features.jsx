import { CheckCircle, Home, Droplets, TreePine, Building, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimation';

const Features = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2);

  const features = [
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "11.30 Acres of Pure Bliss",
      description: "Expansive estate offering endless possibilities for development and peaceful living"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "7 Acres of Coffee Plantation",
      description: "Premium coffee cultivation with organic farming practices and sustainable methods"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "1.20 Acre Land Conversion Done",
      description: "Legal documentation complete with converted land ready for construction"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Water Storage Ponds",
      description: "One big and one small pond ensuring year-round water availability"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Ready Buildings",
      description: "Two residential buildings and one hotel building ready for immediate use"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Organic Farming Zone",
      description: "Dedicated area for sustainable organic farming and kitchen gardening"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Essential Utilities",
      description: "Water and electricity points strategically placed throughout the property"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-earth-50 to-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Estate Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the exceptional amenities and features that make Malnadu Coffee Estate 
            a perfect sanctuary for peaceful living and sustainable agriculture
          </p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="bg-gradient-to-r from-coffee-500 to-nature-500 text-white p-3 rounded-full group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ready to Experience Paradise?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Contact us today to schedule a visit and explore all the incredible features this estate has to offer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="tel:+919035609555"
                className="bg-gradient-to-r from-coffee-600 to-coffee-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Call +91 90356 09555
              </motion.a>
              <motion.a 
                href="#inquiry"
                className="border-2 border-coffee-600 text-coffee-600 font-semibold py-3 px-8 rounded-full hover:bg-coffee-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Inquiry
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
