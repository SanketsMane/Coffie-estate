import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimation';
import OptimizedImage from './OptimizedImage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee plantation overview",
      title: "Coffee Plantation",
      fallback: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1574932194515-47997e6bbf75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Estate buildings",
      title: "Estate Buildings",
      fallback: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Natural landscape",
      title: "Natural Beauty",
      fallback: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mountain views",
      title: "Mountain Views",
      fallback: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Water bodies",
      title: "Water Features",
      fallback: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Waterfalls nearby",
      title: "Nearby Waterfalls",
      fallback: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedImage.index + 1) % images.length;
    setSelectedImage({ ...images[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    const prevIndex = selectedImage.index === 0 ? images.length - 1 : selectedImage.index - 1;
    setSelectedImage({ ...images[prevIndex], index: prevIndex });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-coffee-50 to-nature-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through the breathtaking beauty of Malnadu Coffee Estate. 
            From lush coffee plantations to stunning natural landscapes.
          </p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(image, index)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <OptimizedImage 
                src={image.src}
                fallbackSrc={image.fallback}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <motion.div 
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">Click to view</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-8 w-8" />
                </motion.button>
                
                <motion.button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-12 w-12" />
                </motion.button>
                
                <motion.button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-12 w-12" />
                </motion.button>

                <OptimizedImage 
                  src={selectedImage.src}
                  fallbackSrc={selectedImage.fallback}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-sm opacity-75">
                    {selectedImage.index + 1} of {images.length}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              See It for Yourself
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Pictures can only capture so much. Schedule a visit to experience the true beauty 
              and tranquility of Malnadu Coffee Estate in person.
            </p>
            <motion.a 
              href="#inquiry"
              className="bg-gradient-to-r from-coffee-600 to-coffee-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Visit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
