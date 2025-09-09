import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimation';
import OptimizedImage from './OptimizedImage';

const Testimonials = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.3);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      fallback: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Malnadu Coffee Estate is truly a hidden gem! The peaceful environment and the aroma of fresh coffee make it a perfect retreat from city life. The property is well-maintained and the investment potential is excellent."
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      fallback: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "We visited the estate last month and were amazed by its natural beauty. The coffee plantation is thriving, and the location offers great connectivity. Perfect for weekend getaways and long-term investment."
    },
    {
      name: "Arjun Patel",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The estate exceeded our expectations. From the organic farming zone to the beautiful buildings, everything is thoughtfully designed. The nearby attractions make it an ideal location for eco-tourism ventures."
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating, index) => {
    return Array.from({ length: 5 }, (_, starIndex) => (
      <motion.div
        key={starIndex}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + starIndex * 0.1, duration: 0.3 }}
      >
        <Star
          className={`h-5 w-5 ${
            starIndex < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-nature-50 to-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            What Our Visitors Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our visitors and investors 
            have to say about their experience at Malnadu Coffee Estate.
          </p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="absolute top-6 right-6 text-coffee-200"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                <Quote className="h-8 w-8" />
              </motion.div>

              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <OptimizedImage 
                    src={testimonial.image}
                    fallbackSrc={testimonial.fallback}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-md"
                  />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {renderStars(testimonial.rating, index)}
              </motion.div>

              <motion.p 
                className="text-gray-600 leading-relaxed italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                "{testimonial.text}"
              </motion.p>

              <motion.div 
                className="mt-6 pt-4 border-t border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Verified Visitor</span>
                  <motion.div 
                    className="text-coffee-600 text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    ⭐ {testimonial.rating}.0
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div 
            className="bg-gradient-to-r from-coffee-600 to-nature-600 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="font-playfair text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Join Our Happy Visitors
            </motion.h3>
            <motion.p 
              className="text-coffee-100 mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Experience the magic of Malnadu Coffee Estate yourself. Book a visit today 
              and discover why our guests keep coming back.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                href="tel:+919035609555"
                className="bg-white text-coffee-600 font-semibold py-3 px-8 rounded-full hover:bg-coffee-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Call +91 90356 09555
              </motion.a>
              <motion.a 
                href="#inquiry"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-coffee-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Inquiry
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "50+", label: "Happy Visitors", color: "coffee" },
            { value: "5★", label: "Average Rating", color: "nature" },
            { value: "100%", label: "Satisfaction Rate", color: "coffee" },
            { value: "24/7", label: "Support Available", color: "nature" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`text-2xl font-bold text-${stat.color}-600 mb-2`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
