import { motion } from 'framer-motion';
import { Play, Award, Users, MapPin, Clock, ChevronRight } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import OptimizedImage from '../components/OptimizedImage';

const Estate = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const plantationImages = [
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Fullscreen Video Hero */}
      <section className="relative h-screen flex items-center">
        <VideoBackground
          src="/aura-estate-video.mp4"
          fallbackImage="https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80"
          className="w-full h-full"
          showControls={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-6 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <MapPin className="h-4 w-4" />
                  Sakleshpur, Karnataka
                </span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-6xl lg:text-8xl font-black mb-6 leading-none"
              >
                AURA
                <span className="block text-amber-400">ESTATE</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl mb-8 text-gray-200 max-w-lg"
              >
                Where premium coffee meets pristine nature. Experience 11.30 acres of pure coffee paradise.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex gap-4"
              >
                <button className="group bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Story
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold transition-all">
                  Explore Estate
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Estate Highlights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span>Total Area</span>
                    <span className="font-bold">11.30 Acres</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span>Coffee Plantation</span>
                    <span className="font-bold">7 Acres</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span>Established</span>
                    <span className="font-bold">2008</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span>Certification</span>
                    <span className="font-bold text-green-400">100% Organic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Coffee Journey - Horizontal Scroll */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl font-black text-gray-900 mb-4"
            >
              THE COFFEE JOURNEY
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              From seed to cup, every step is crafted with passion and precision
            </motion.p>
          </motion.div>

          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory">
            {[
              { title: "PLANTING", desc: "Premium seeds in rich soil", img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { title: "GROWING", desc: "3-4 years of careful nurturing", img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { title: "HARVESTING", desc: "Hand-picked at perfect ripeness", img: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { title: "PROCESSING", desc: "Traditional methods preserved", img: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex-none w-80 snap-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="h-60 overflow-hidden">
                    <OptimizedImage
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plantation Showcase - Split Screen */}
      <section className="min-h-screen bg-gradient-to-r from-emerald-900 to-stone-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left - Content */}
          <div className="flex items-center p-12 lg:p-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <span className="text-emerald-400 text-lg font-bold tracking-wider">OUR PLANTATION</span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-black mb-8 leading-tight"
              >
                7 ACRES OF
                <span className="block text-emerald-400">PURE MAGIC</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl mb-12 text-gray-300 leading-relaxed"
              >
                Our coffee plantation is a testament to sustainable farming and quality. Every plant is carefully tended, every bean is hand-selected, and every cup tells the story of our dedication.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 mb-12"
              >
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-400 mb-2">2500+</div>
                  <div className="text-sm uppercase tracking-wider">Coffee Plants</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-400 mb-2">100%</div>
                  <div className="text-sm uppercase tracking-wider">Organic</div>
                </div>
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                className="group bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                View Gallery
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right - Image Grid */}
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-4 h-full">
              {plantationImages.map((img, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl overflow-hidden ${
                    index === 0 ? 'row-span-2' : 
                    index === 3 ? 'row-span-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <OptimizedImage
                    src={img}
                    alt={`Coffee plantation ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Modern */}
      <section className="py-24 bg-gradient-to-r from-amber-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-black text-black mb-8"
            >
              READY TO EXPERIENCE
              <span className="block">AURA ESTATE?</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-black/80 mb-12 max-w-2xl mx-auto"
            >
              Book your visit today and immerse yourself in the world of premium coffee cultivation.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="bg-black text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all">
                BOOK NOW
              </button>
              <button className="border-2 border-black text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all">
                LEARN MORE
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Estate;
