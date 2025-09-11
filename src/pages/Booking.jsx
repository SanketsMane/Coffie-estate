import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Phone, Mail, MapPin, Clock, Check, Coffee, Bed, Car } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [selectedPackage, setSelectedPackage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', formData);
  };

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

  const packages = [
    {
      id: 'day-visit',
      name: 'Day Visit',
      price: '₹500',
      duration: '8 hours',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      includes: [
        'Coffee plantation tour',
        'Fresh coffee tasting',
        'Traditional lunch',
        'Nature walk',
        'Photography session'
      ]
    },
    {
      id: 'overnight',
      name: 'Overnight Stay',
      price: '₹2,500',
      duration: '1 night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      includes: [
        'Comfortable accommodation',
        'All meals included',
        'Coffee plantation tour',
        'Sunset/sunrise viewing',
        'Bonfire evening',
        'Nature trekking'
      ]
    },
    {
      id: 'weekend',
      name: 'Weekend Retreat',
      price: '₹4,500',
      duration: '2 nights',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      includes: [
        '2 nights accommodation',
        'All meals & beverages',
        'Complete plantation experience',
        'Adventure activities',
        'Cultural programs',
        'Spa treatments',
        'Local sightseeing'
      ]
    }
  ];

  const amenities = [
    { icon: <Bed className="h-6 w-6" />, name: 'Comfortable Rooms' },
    { icon: <Coffee className="h-6 w-6" />, name: 'Fresh Coffee' },
    { icon: <Car className="h-6 w-6" />, name: 'Transport Facility' },
    { icon: <Phone className="h-6 w-6" />, name: '24/7 Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80"
            alt="Book Your Stay"
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
            className=" text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Book Your Stay
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-earth-100 font-light leading-relaxed"
          >
            Experience the magic of Aura Properties Coffee Estate
          </motion.p>
        </motion.div>
      </section>

      {/* Package Selection */}
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
              className=" text-3xl md:text-4xl font-bold text-earth-800 mb-4"
            >
              Choose Your Experience
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-earth-600 max-w-3xl mx-auto"
            >
              Select from our carefully curated packages designed to give you the perfect coffee estate experience.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedPackage === pkg.id ? 'ring-4 ring-coffee-500 shadow-xl' : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <OptimizedImage
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-coffee-600 text-white px-3 py-1 rounded-full font-semibold">
                    {pkg.price}
                  </div>
                  {selectedPackage === pkg.id && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-full">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-earth-800 mb-2">{pkg.name}</h3>
                  <p className="text-earth-600 mb-4 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration}
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-earth-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className=" text-3xl md:text-4xl font-bold text-earth-800 mb-4"
            >
              Make Your Reservation
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-earth-600"
            >
              Fill in your details and we'll get back to you with confirmation.
            </motion.p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-earth-50 rounded-xl p-8 shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Check-in Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-earth-400" />
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Check-out Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-earth-400" />
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                    required
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-earth-400" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Number of Rooms
                </label>
                <div className="relative">
                  <Bed className="absolute left-3 top-3 h-5 w-5 text-earth-400" />
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-earth-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                    required
                  />
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-earth-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <label className="block text-sm font-medium text-earth-700 mb-2">
                Special Requests or Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
                placeholder="Any special requests or dietary requirements..."
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full bg-coffee-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-coffee-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Booking Request
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-earth-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className=" text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-coffee-400" />
                  <span>+91 9035609555</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-coffee-400" />
                  <span>info@malnaducoffee.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-coffee-400" />
                  <span>Aura Properties Coffee Estate<br />Sakleshpur, Hassan District<br />Karnataka, India</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className=" text-2xl font-bold mb-6">What's Included</h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-coffee-400 mr-3">
                      {amenity.icon}
                    </div>
                    <span className="text-sm">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
