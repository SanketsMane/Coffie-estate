import { MapPin, Camera, Mountain, TreePine, Waves, Compass, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimation';
import OptimizedImage from './OptimizedImage';

const NearbyAttractions = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const attractions = [
    {
      icon: <Mountain className="h-8 w-8" />,
      name: "Manjarabad Fort",
      distance: "10 km",
      time: "15 minutes",
      description: "Historic star-shaped fort built by Tipu Sultan with panoramic views of the Western Ghats",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fallback: "https://images.unsplash.com/photo-1565522308149-76a0b4a7e07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Historical significance", "Star-shaped architecture", "Panoramic views", "Photography spot"]
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      name: "Bisle Ghat",
      distance: "50 km",
      time: "1.5 hours",
      description: "Scenic viewpoint offering breathtaking views of the Western Ghats and lush green valleys",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fallback: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Scenic viewpoint", "Trekking trails", "Wildlife spotting", "Nature photography"]
    },
    {
      icon: <Waves className="h-8 w-8" />,
      name: "Hemavathi Backwaters",
      distance: "17 km",
      time: "25 minutes",
      description: "Serene backwaters perfect for boating, fishing, and peaceful relaxation by the water",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fallback: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Boating activities", "Fishing spots", "Peaceful ambiance", "Water sports"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      name: "Mookanamane Falls",
      distance: "22 km",
      time: "35 minutes",
      description: "Spectacular waterfall cascading from the hills, especially beautiful during monsoon season",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fallback: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Waterfall trekking", "Monsoon beauty", "Natural pools", "Adventure activities"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-nature-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Nearby Attractions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the natural wonders and historical treasures that surround Malnadu Coffee Estate. 
            Adventure and tranquility await just minutes away.
          </p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {attractions.map((attraction, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative overflow-hidden">
                <OptimizedImage 
                  src={attraction.image}
                  fallbackSrc={attraction.fallback}
                  alt={attraction.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <MapPin className="h-4 w-4 text-coffee-600" />
                  <span className="text-sm font-medium text-coffee-600">{attraction.distance}</span>
                </motion.div>
                <motion.div 
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <div className="text-coffee-600">
                    {attraction.icon}
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 right-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {attraction.time}
                </motion.div>
              </div>

              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <h3 className=" text-2xl font-bold text-gray-800 mb-3">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {attraction.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {attraction.highlights.map((highlight, highlightIndex) => (
                      <motion.div 
                        key={highlightIndex} 
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 + highlightIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-nature-400 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="mt-6 flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <div className="flex items-center space-x-2">
                    <Camera className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Perfect for photography</span>
                  </div>
                  <motion.button 
                    className="text-coffee-600 hover:text-coffee-700 font-medium text-sm flex items-center space-x-1 group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.div 
            className="bg-gradient-to-r from-coffee-600 to-nature-600 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className=" text-2xl md:text-3xl font-bold mb-4">
              Explore the Best of Sakleshpur
            </h3>
            <p className="text-coffee-100 mb-6 text-lg">
              From historical forts to serene waterfalls, experience the diverse attractions that make this region a perfect getaway destination.
            </p>
            <motion.a 
              href="#contact"
              className="bg-white text-coffee-600 font-semibold py-3 px-8 rounded-full hover:bg-coffee-50 transform hover:-translate-y-1 transition-all duration-300 inline-block shadow-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Visit
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NearbyAttractions;
