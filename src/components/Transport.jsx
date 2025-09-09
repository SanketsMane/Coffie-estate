import { Train, Building, Plane, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimation';

const Transport = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [infoRef, infoVisible] = useScrollAnimation(0.2);

  const transportOptions = [
    {
      icon: <Train className="h-8 w-8" />,
      name: "Sakleshpur Railway Station",
      distance: "15 km",
      time: "20 minutes",
      description: "Well-connected railway station with regular trains to major cities",
      color: "from-blue-500 to-blue-600",
      details: ["Direct trains to Bangalore", "Daily passenger services", "Scenic railway route"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      name: "Hassan City",
      distance: "54 km",
      time: "1 hour",
      description: "Major district headquarters with all urban amenities and facilities",
      color: "from-green-500 to-green-600",
      details: ["Banking & healthcare", "Shopping centers", "Government offices"]
    },
    {
      icon: <Plane className="h-8 w-8" />,
      name: "Mangalore Airport",
      distance: "118 km",
      time: "2.5 hours",
      description: "International airport connecting to major domestic and international destinations",
      color: "from-purple-500 to-purple-600",
      details: ["Domestic flights", "International connectivity", "Car rental services"]
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
    <section className="py-20 bg-gradient-to-br from-coffee-50 to-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            Transport Access
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically located with excellent connectivity to major transportation hubs, 
            making your journey to paradise convenient and accessible.
          </p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {transportOptions.map((transport, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Background Pattern */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 opacity-10 transform translate-x-6 -translate-y-6"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${transport.color} rounded-full`}></div>
              </motion.div>

              <div className="relative z-10">
                <motion.div 
                  className={`bg-gradient-to-r ${transport.color} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  {transport.icon}
                </motion.div>

                <motion.h3 
                  className="font-playfair text-2xl font-bold text-gray-800 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {transport.name}
                </motion.h3>

                <motion.div 
                  className="flex items-center space-x-4 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-coffee-600" />
                    <span className="text-coffee-600 font-semibold">{transport.distance}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-500">{transport.time}</span>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {transport.description}
                </motion.p>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {transport.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex} 
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.7 + detailIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-coffee-400 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          ref={infoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={infoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="font-playfair text-2xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Road Connectivity
            </motion.h3>
            <motion.p 
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Excellent road network connecting to major highways and state roads. 
              Well-maintained roads ensure smooth travel throughout the year.
            </motion.p>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "NH-75 Highway access",
                "All-weather roads",
                "Public transport available"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-2"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                  }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-nature-400 rounded-full"></div>
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-coffee-600 to-coffee-700 text-white rounded-2xl p-8"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="font-playfair text-2xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Travel Made Easy
            </motion.h3>
            <motion.p 
              className="text-coffee-100 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Whether you're visiting for a weekend getaway or planning to make this your permanent home, 
              our location offers unmatched accessibility.
            </motion.p>
            <motion.a 
              href="#contact"
              className="bg-white text-coffee-600 font-semibold py-3 px-6 rounded-full hover:bg-coffee-50 transition-all duration-300 inline-block shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transport;
