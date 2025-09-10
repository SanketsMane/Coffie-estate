import { motion } from 'framer-motion';
import { Leaf, Coffee, TreePine, Heart, Award, Users } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import OptimizedImage from '../components/OptimizedImage';

const Estate = () => {
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

  const features = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "7 Acres Coffee Plantation",
      description: "Premium Arabica and Robusta varieties grown in the perfect climate of Western Ghats"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Organic Farming",
      description: "100% organic cultivation methods ensuring pure, chemical-free coffee beans"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Biodiversity Conservation",
      description: "Protecting native flora and fauna while maintaining ecological balance"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Farm-to-Cup Experience",
      description: "Witness the complete coffee journey from bean to your perfect cup"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Award-winning coffee beans recognized for their exceptional flavor profile"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Impact",
      description: "Supporting local farmers and sustainable agricultural practices"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Coffee Plantation",
      description: "Lush green coffee plants in the Western Ghats"
    },
    {
      src: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Estate Views",
      description: "Panoramic views of our beautiful estate"
    },
    {
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Coffee Processing",
      description: "Traditional methods meet modern techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fresh Harvest",
      description: "Hand-picked coffee cherries at peak ripeness"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <VideoBackground
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          fallbackImage="https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80"
          className="w-full h-full"
          showControls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        />
        
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
            Our Coffee Estate
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-earth-100 font-light leading-relaxed"
          >
            11.30 acres of pure bliss nestled in the heart of Sakleshpur's Western Ghats
          </motion.p>
        </motion.div>
      </section>

      {/* Estate Features */}
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
              What Makes Our Estate Special
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-earth-600 max-w-3xl mx-auto"
            >
              Discover the unique features that make Malnadu Coffee Estate a true sanctuary for coffee lovers and nature enthusiasts alike.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-coffee-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl text-earth-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-earth-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Estate Gallery */}
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
              Estate Gallery
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-earth-600 max-w-3xl mx-auto"
            >
              Experience the beauty and serenity of our coffee estate through these captivating images.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-semibold text-xl mb-2">{image.title}</h3>
                    <p className="text-earth-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coffee Process */}
      <section className="py-20 bg-earth-800 text-white">
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
              className="font-playfair text-3xl md:text-4xl font-bold mb-4"
            >
              From Seed to Sip
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-earth-200 max-w-3xl mx-auto"
            >
              Follow the journey of our coffee from planting to your perfect cup, crafted with love and tradition.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: "01", title: "Planting", description: "Carefully selected seeds planted in nutrient-rich soil" },
              { step: "02", title: "Growing", description: "Nurtured with organic methods for 3-4 years" },
              { step: "03", title: "Harvesting", description: "Hand-picked when cherries reach perfect ripeness" },
              { step: "04", title: "Processing", description: "Traditional processing methods to preserve flavor" }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-coffee-400 font-bold text-4xl mb-4">{process.step}</div>
                <h3 className="font-semibold text-xl mb-3">{process.title}</h3>
                <p className="text-earth-300">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Estate;
