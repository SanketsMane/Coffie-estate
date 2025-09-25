import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, TreePine, Car, Utensils, Building, Phone, MessageCircle, CheckCircle, Star, Camera, Route, Award, TrendingUp, Shield, Home, Users, Leaf, Target, Fuel, Hotel, ShoppingBag, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyGallery from '../components/PropertyGallery';

const Property5Page = () => {
  const propertyImages = [
    {
      src: "/images/properties/5-acres/property-10.jpeg",
      alt: "5.06 Acres Smart Investment - View 1",
      caption: "Strategic Development Land with Natural Setting"
    },
    {
      src: "/images/properties/5-acres/property-11.jpeg",
      alt: "5.06 Acres Smart Investment - View 2", 
      caption: "2.5 Acres Flat Land Ready for Construction"
    },
    {
      src: "/images/properties/5-acres/property-12.jpeg",
      alt: "5.06 Acres Smart Investment - View 3",
      caption: "2.5 Acres Preserved Greenery and Natural Environment"
    },
    {
      src: "/images/properties/5-acres/property-13.jpeg",
      alt: "5.06 Acres Smart Investment - View 4",
      caption: "Perfect Balance of Development and Sustainability"
    }
  ];

  const propertyStats = [
    { label: "Total Area", value: "5.0", unit: "Acres" },
    { label: "Development", value: "2.5", unit: "Acres" },
    { label: "Greenery", value: "2.5", unit: "Acres" },
    { label: "ROI Potential", value: "20%", unit: "Annual" }
  ];

  const keyFeatures = [
    { 
      icon: Target, 
      title: "Smart Investment", 
      description: "Perfectly sized 5-acre property ideal for manageable development",
      color: "from-slate-500 to-gray-600"
    },
    { 
      icon: Building, 
      title: "Development Ready", 
      description: "2.5 acres cleared and ready for immediate commercial construction",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      icon: TreePine, 
      title: "Preserved Nature", 
      description: "2.5 acres of protected greenery maintaining ecological balance",
      color: "from-green-500 to-emerald-600"
    },
    { 
      icon: TrendingUp, 
      title: "High ROI Potential", 
      description: "Strategic location ensures excellent returns on investment",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const highlights = [
    'Manageable 5-Acre Smart Investment Property',
    'Highway Connectivity & Easy Access',
    '2.5 Acres Development-Ready Plots',
    '2.5 Acres Preserved Natural Environment',
    'Perfect for Commercial Business Ventures',
    'Exceptional Investment Growth Potential'
  ];

  const nearbyAttractions = [
    { name: 'Manjarabad Star Fort', distance: '7 km', icon: Shield, description: 'Historic star-shaped fort with stunning views' },
    { name: 'Mokannana Falls', distance: '22 km', icon: Droplets, description: 'Beautiful cascading waterfalls' },
    { name: 'Betta Bhairaveshwara Temple', distance: '41 km', icon: Home, description: 'Ancient temple with spiritual significance' },
    { name: 'Bisile View Point', distance: '52 km', icon: TreePine, description: 'Breathtaking panoramic mountain views' },
    { name: 'Kukke Subramanya Temple', distance: 'Short drive', icon: Star, description: 'Famous pilgrimage destination' },
    { name: 'Dharmasthala Temple', distance: 'Short drive', icon: Award, description: 'Renowned spiritual and cultural center' }
  ];

  const businessOpportunities = [
    { name: 'Petrol Pump & Fuel Station', icon: Fuel, description: 'Highway traffic advantage' },
    { name: 'Hotels & Restaurants', icon: Hotel, description: 'Tourism and traveler market' },
    { name: 'Coffee Cafe & Shop', icon: Utensils, description: 'Local coffee culture appeal' },
    { name: 'Boutique Homestay', icon: Home, description: 'Experience-based accommodation' },
    { name: 'Farm Experience Center', icon: TreePine, description: 'Agri-tourism activities' },
    { name: 'Commercial Complex', icon: Building, description: 'Multi-business development' },
    { name: 'Retail Outlets', icon: ShoppingBag, description: 'Shopping and convenience stores' },
    { name: 'Event Space', icon: Star, description: 'Weddings and corporate events' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-blue-800"
        variants={itemVariants}
      >
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-6 py-2 bg-slate-600/20 backdrop-blur-sm rounded-full border border-slate-400/30 mb-4">
              <span className="text-slate-300 font-semibold">Smart Investment</span>
            </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-400 via-gray-300 to-zinc-400 bg-clip-text text-transparent">
                5.06 Acres
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-100 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              Compact and efficient coffee estate perfect for first-time investors with excellent growth potential
            </p>
            <p className="text-lg text-slate-200 mb-8 max-w-4xl mx-auto">
              Strategic 5.06-acre property with 2.5 acres flat land and 2.5 acres greeneries, perfect for commercial development with environmental sustainability
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sakleshpur, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Development Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Route className="h-4 w-4" />
                <span>Highway Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Property Stats */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-slate-50 to-blue-50"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {propertyStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium mb-1">{stat.unit}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Key Features */}
        <motion.section 
          className="mb-20"
          variants={itemVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Smart Investment Features
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Perfect balance of development opportunity and environmental preservation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${feature.color} text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section 
          className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-3xl"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-md"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <CheckCircle className="h-6 w-6 text-slate-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Property Gallery */}
        <motion.section 
          variants={itemVariants}
          className="mb-20"
        >
          <PropertyGallery 
            images={propertyImages}
            title="5.06 Acres Smart Investment Gallery"
            className="max-w-7xl mx-auto"
          />
        </motion.section>

        {/* Business Opportunities - Featured Section */}
        <motion.section 
          className="mb-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Commercial Business Opportunities
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Development plots are ideal for various commercial ventures that serve highway traffic and local tourism. Perfect location for businesses that benefit from high visibility and accessibility.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessOpportunities.map((opportunity, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-slate-100 p-3 rounded-xl w-fit mb-4">
                  <opportunity.icon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{opportunity.name}</h3>
                <p className="text-gray-600 text-sm">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nearby Attractions */}
        <motion.section 
          className="mb-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nearby Attractions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {nearbyAttractions.map((attraction, index) => {
              const IconComponent = attraction.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-slate-100 p-3 rounded-xl">
                        <IconComponent className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">{attraction.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{attraction.description}</p>
                      </div>
                    </div>
                    <span className="text-slate-600 font-bold bg-slate-50 px-3 py-1 rounded-full text-sm">
                      {attraction.distance}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          className="bg-gradient-to-r from-slate-600 to-blue-600 text-white p-12 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Business Venture?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to explore the commercial potential of these development plots and secure your smart investment opportunity with environmental responsibility.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919035609555"
                className="flex-1 max-w-xs bg-white text-slate-600 font-bold py-4 px-8 rounded-2xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                                href="https://wa.me/919035609555?text=Hi, I'm interested in the 5.06 Acres Coffee Estate at Aura Properties"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-xs bg-slate-700 text-white font-bold py-4 px-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Property5Page;