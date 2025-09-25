import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, TreePine, Car, Utensils, Building, Phone, MessageCircle, CheckCircle, Star, Camera, Route, Award, TrendingUp, Shield, Home, Users, Leaf, Target, Fuel, Hotel, ShoppingBag, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyGallery from '../components/PropertyGallery';

const Property22Page = () => {
  const propertyImages = [
    {
      src: "/images/properties/22-acres/property-1.jpeg",
      alt: "22.20 Acres Premium Estate - View 1",
      caption: "Expansive Coffee Plantation with Highway Access"
    },
    {
      src: "/images/properties/22-acres/property-2.jpeg",
      alt: "22.20 Acres Premium Estate - View 2", 
      caption: "Mature Coffee Plants with Excellent Yield"
    },
    {
      src: "/images/properties/22-acres/property-3.jpeg",
      alt: "22.20 Acres Premium Estate - View 3",
      caption: "Scenic Mountain Valley Location"
    },
    {
      src: "/images/properties/22-acres/property-4.jpeg",
      alt: "22.20 Acres Premium Estate - View 4",
      caption: "Estate Infrastructure and Development Potential"
    },
    {
      src: "/images/properties/22-acres/property-5.jpeg",
      alt: "22.20 Acres Premium Estate - View 5",
      caption: "Natural Spring Water Source and Processing Area"
    }
  ];

  const propertyStats = [
    { label: "Total Area", value: "22.20", unit: "Acres" },
    { label: "Highway Frontage", value: "750", unit: "Feet" },
    { label: "Established Coffee", value: "85%", unit: "Coverage" },
    { label: "Appreciation", value: "12%", unit: "Annual" }
  ];

  const keyFeatures = [
    { 
      icon: Award, 
      title: "Premium Location", 
      description: "22.20 acres of prime coffee estate land with highway frontage",
      color: "from-emerald-500 to-green-600"
    },
    { 
      icon: TreePine, 
      title: "Established Plantation", 
      description: "Mature coffee plants with proven yield and immediate income",
      color: "from-green-500 to-emerald-600"
    },
    { 
      icon: Droplets, 
      title: "Natural Water Source", 
      description: "Year-round spring water ensuring sustainable operations",
      color: "from-blue-500 to-cyan-600"
    },
    { 
      icon: TrendingUp, 
      title: "Investment Grade", 
      description: "High appreciation potential with multiple revenue streams",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const highlights = [
    'Vast 22.20 Acres of Premium Coffee Estate',
    '750 ft Highway Frontage on NH-75',
    'Established & Profitable Coffee Plantation',
    'Natural Spring Water Source',
    'Multiple Business Development Opportunities',
    'Exceptional Mountain Valley Views'
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
    { name: 'Luxury Resort Development', icon: Home },
    { name: 'Coffee Processing & Export', icon: TreePine },
    { name: 'Adventure Tourism Hub', icon: Users },
    { name: 'Wellness Retreat Center', icon: Star },
    { name: 'Event & Wedding Venue', icon: Camera },
    { name: 'Organic Farming Initiative', icon: TreePine }
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
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900 to-green-800"
        variants={itemVariants}
      >
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-6 py-2 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-4">
              <span className="text-emerald-300 font-semibold">Premium Coffee Estate</span>
            </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
                22.20 Acres
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              Premium coffee estate with established plantation, strategic location, and exceptional investment potential for serious investors
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sakleshpur, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2">
                <TreePine className="h-4 w-4" />
                <span>Established Plantation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Route className="h-4 w-4" />
                <span>750ft Highway Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Property Stats */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-emerald-50 to-green-50"
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
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-emerald-500 font-medium mb-1">{stat.unit}</div>
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
              Premium Features
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need for a successful business venture or premium investment
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
                <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
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
            title="22.20 Acres Premium Estate Gallery"
            className="max-w-7xl mx-auto"
          />
        </motion.section>

        {/* Attractions & Business Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-20">
          {/* Attractions */}
          <motion.section variants={itemVariants}>
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nearby Attractions
            </motion.h2>
            <div className="space-y-4">
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
                        <div className="bg-emerald-100 p-3 rounded-xl">
                          <IconComponent className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{attraction.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{attraction.description}</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full text-sm">
                        {attraction.distance}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Business Opportunities */}
          <motion.section variants={itemVariants}>
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Business Opportunities
            </motion.h2>
            <div className="grid grid-cols-1 gap-4">
              {businessOpportunities.map((opportunity, index) => (
                <motion.div 
                  key={index} 
                  className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-100 hover:from-emerald-100 hover:to-green-100 transition-all duration-300"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center space-x-4">
                    <opportunity.icon className="h-8 w-8 text-emerald-600" />
                    <span className="text-gray-800 font-semibold text-lg">{opportunity.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Contact CTA */}
        <motion.section 
          className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-12 rounded-3xl shadow-2xl"
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
              Ready to Explore This Premium Estate?
            </motion.h2>
            <motion.p 
              className="text-xl text-emerald-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to schedule a private viewing and discover the endless possibilities that await at this exceptional 22.20-acre coffee estate.
            </motion.p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-md mx-auto">
              <motion.a
                href="tel:+919035609555"
                className="flex-1 bg-white text-emerald-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="https://wa.me/919035609555?text=Hi, I'm interested in the 22.20 Acres Coffee Estate at Aura Properties"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Property22Page;