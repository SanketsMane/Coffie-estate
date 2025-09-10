import { motion } from 'framer-motion';
import { Camera, Mountain, Coffee, Sunrise, Bird, TreePine, Star, MapPin } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Activities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const activities = [
    {
      icon: <Coffee className="h-12 w-12" />,
      title: "Coffee Plantation Tour",
      description: "Guided tour through our coffee plantation with detailed explanation of the coffee growing process",
      duration: "2-3 hours",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Learn about coffee varieties", "See processing methods", "Taste fresh coffee", "Meet local farmers"]
    },
    {
      icon: <Mountain className="h-12 w-12" />,
      title: "Nature Trekking",
      description: "Explore the Western Ghats through scenic trails surrounded by lush greenery and wildlife",
      duration: "3-5 hours",
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Scenic mountain trails", "Wildlife spotting", "Photography opportunities", "Guided by locals"]
    },
    {
      icon: <Bird className="h-12 w-12" />,
      title: "Bird Watching",
      description: "Discover diverse bird species in their natural habitat with early morning sessions",
      duration: "2-4 hours",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["150+ bird species", "Best during dawn", "Binoculars provided", "Expert bird guide"]
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Photography Sessions",
      description: "Capture stunning landscapes, plantation life, and golden hour moments",
      duration: "2-6 hours",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Golden hour shoots", "Landscape photography", "Macro coffee shots", "Professional tips"]
    },
    {
      icon: <Sunrise className="h-12 w-12" />,
      title: "Sunrise Viewing",
      description: "Experience breathtaking sunrises over the Western Ghats from our vantage points",
      duration: "1-2 hours",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Panoramic views", "Best photo spots", "Fresh mountain air", "Complimentary coffee"]
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Stargazing",
      description: "Clear night skies perfect for astronomy enthusiasts and romantic evenings",
      duration: "2-3 hours",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Dark sky zone", "Constellation guide", "Telescope available", "Night photography"]
    }
  ];

  const nearbyAttractions = [
    {
      name: "Manjarabad Fort",
      distance: "15 km",
      description: "Historic star-shaped fort built by Tipu Sultan",
      image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Green Route Railway",
      distance: "12 km",
      description: "Scenic train route through Western Ghats",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bisle Ghat",
      distance: "25 km",
      description: "Breathtaking viewpoint with panoramic valley views",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Hemavathi Reservoir",
      distance: "18 km",
      description: "Beautiful reservoir surrounded by hills",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80"
            alt="Activities at Malnadu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Activities & Experiences
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-earth-100 font-light leading-relaxed"
          >
            Immerse yourself in nature's beauty with our curated experiences
          </motion.p>
        </motion.div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="font-playfair text-3xl md:text-4xl font-bold text-earth-800 mb-4"
            >
              What You Can Do
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-earth-600 max-w-3xl mx-auto"
            >
              From coffee plantation tours to nature treks, we offer a variety of activities to make your stay memorable.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <OptimizedImage
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-coffee-600 mr-4">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl text-earth-800 mb-1">
                          {activity.title}
                        </h3>
                        <div className="flex space-x-4 text-sm text-earth-500">
                          <span>⏱️ {activity.duration}</span>
                          <span>📊 {activity.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-earth-600 mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {activity.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm text-earth-600">
                          <span className="w-2 h-2 bg-coffee-600 rounded-full mr-2"></span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="font-playfair text-3xl md:text-4xl font-bold text-earth-800 mb-4"
            >
              Nearby Attractions
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-earth-600 max-w-3xl mx-auto"
            >
              Explore the rich cultural and natural heritage of Sakleshpur and surrounding areas.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <OptimizedImage
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {attraction.distance}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg text-earth-800 mb-2 group-hover:text-coffee-600 transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-earth-600 text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-coffee-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="font-playfair text-3xl md:text-4xl font-bold mb-6"
            >
              Ready for Your Adventure?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-coffee-200 mb-8"
            >
              Book your stay with us and experience the perfect blend of nature, adventure, and relaxation.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-coffee-800 font-semibold py-4 px-8 rounded-full hover:bg-coffee-100 transition-colors duration-300"
              >
                Book Your Stay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-coffee-800 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
