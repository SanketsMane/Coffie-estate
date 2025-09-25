import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, TreePine, TrendingUp, ArrowRight } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      id: '22-acres',
      title: '22.20 Acres',
      subtitle: 'Premium Coffee Estate',
      description: 'Expansive coffee plantation with established trees, strategic highway access, and exceptional investment potential.',
      price: 'Premium Investment',
      location: 'Sakleshpur, Karnataka',
      coverage: '85% Coffee Coverage',
      access: 'Direct Highway Access',
      roi: '18% Expected ROI',
      color: 'from-emerald-600 to-green-700',
      hoverColor: 'hover:from-emerald-700 hover:to-green-800',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80',
      features: ['85% Established Coffee', 'Highway Connectivity', 'Premium Location', 'High ROI Potential']
    },
    {
      id: '11-acres',
      title: '11.30 Acres',
      subtitle: 'Compact Excellence',
      description: 'Perfectly sized estate with mature coffee plants, excellent accessibility, and optimal management potential.',
      price: 'Smart Investment',
      location: 'Sakleshpur, Karnataka',
      coverage: '70% Coffee Coverage',
      access: 'Direct Highway Access',
      roi: '15% Expected ROI',
      color: 'from-amber-600 to-orange-700',
      hoverColor: 'hover:from-amber-700 hover:to-orange-800',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80',
      features: ['70% Coffee Coverage', 'Perennial Water Source', 'Perfect Size', 'Easy Management']
    },
    {
      id: '5-acres',
      title: '5.06 Acres',
      subtitle: 'Smart Investment',
      description: 'Compact and efficient coffee estate with 2.5 acres flat land and 2.5 acres greeneries, perfect for first-time investors.',
      price: 'Entry Level',
      location: 'Sakleshpur, Karnataka',
      coverage: '60% Coffee Coverage',
      access: 'Highway Access',
      roi: '12% Expected ROI',
      color: 'from-slate-600 to-gray-700',
      hoverColor: 'hover:from-slate-700 hover:to-gray-800',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80',
      features: ['2.5 Acres Flat Land', '2.5 Acres Greeneries', 'First-time Friendly', 'Affordable Entry']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Properties</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover premium coffee estates in Karnataka's most sought-after locations. Each property offers unique advantages for both lifestyle and investment.
          </motion.p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">{property.subtitle}</div>
                    <div className="text-2xl font-bold">{property.title}</div>
                  </div>
                </div>

                {/* Property Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {property.description}
                    </p>
                  </div>

                  {/* Property Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="text-sm text-gray-600">{property.location}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <TreePine className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="text-sm text-gray-600">{property.coverage}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {property.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to={`/property/${property.id}`}
                    className={`w-full bg-gradient-to-r ${property.color} ${property.hoverColor} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg`}
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-3xl shadow-2xl text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Invest in Your Future?
          </motion.h2>
          <motion.p 
            className="text-xl text-green-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact our property experts today to schedule a site visit and discover your perfect coffee estate investment.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <motion.a
              href="tel:+919035609555"
              className="flex-1 bg-white text-green-600 font-bold py-4 px-8 rounded-2xl hover:bg-green-50 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Call Now</span>
            </motion.a>
            <motion.a
              href="https://wa.me/919035609555?text=Hi, I'm interested in your coffee estate properties"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-700 text-white font-bold py-4 px-8 rounded-2xl hover:bg-green-800 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Properties;