import { ArrowDown, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';

const Hero = () => {
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

  const backgroundImage = "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80";
  const fallbackImage = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80";
  // Using the Aura estate video
  const heroVideo = "/aura-estate-video.mp4";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <VideoBackground
          src={heroVideo}
          fallbackImage={fallbackImage}
          className="w-full h-full"
          showControls={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          style={{ 
            fontFamily: "'Poppins', sans-serif", 
            fontWeight: '800',
            letterSpacing: '-0.01em'
          }}
        >
          AURA PROPERTIES
          <motion.span 
            variants={itemVariants}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-300"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: '600'
            }}
          >
            Your Gateway to Opportunity
          </motion.span>
          <motion.span 
            variants={itemVariants}
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-earth-200"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: '300'
            }}
          >
            Nature • Business • Opportunity
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-earth-100 font-light leading-relaxed"
        >
          Welcome to 22.20 acres of endless possibilities on National Highway 75!
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a 
            href="#properties" 
            className="bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Properties</span>
            <ArrowDown className="h-5 w-5" />
          </motion.a>
          <motion.a 
            href="https://wa.me/919035609555?text=Hi, I'm interested in Aura Properties" 
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-earth-200"
        >
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="h-4 w-4" />
            <span>22.20 Acres on NH-75</span>
          </motion.div>
          <div className="hidden sm:block text-earth-400">•</div>
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span>750 ft Highway Frontage</span>
          </motion.div>
          <div className="hidden sm:block text-earth-400">•</div>
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span>Profitable Coffee Plantation</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDown className="h-6 w-6 text-white opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;
