import { ArrowLeft, MapPin, TreePine, Car, Utensils, Building, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import VideoBackground from '../components/VideoBackground';

const PropertyPage = ({ propertyType, onBack }) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const properties = {
      '22.20': {
        title: '22.20 Acres Property',
        subtitle: 'Premium Investment Opportunity',
        price: 'Contact for Pricing',
        description: 'Discover the perfect blend of natural beauty and business opportunity with our expansive 22.20-acre property strategically located on National Highway 75. This prime real estate offers exceptional accessibility and endless potential for various ventures.',
        highlights: [
          '750 ft Highway Frontage on NH-75',
          'Profitable Coffee Plantation',
          'Multiple Business Opportunities',
          'Excellent Connectivity to Major Cities',
          'Natural Spring Water Source',
          'Established Infrastructure'
        ],
        attractions: [
          { name: 'Mullayyanagiri Peak', distance: '5 km', icon: TreePine },
          { name: 'Baba Budangiri', distance: '8 km', icon: TreePine },
          { name: 'Hebbe Falls', distance: '12 km', icon: TreePine },
          { name: 'Kemmangundi', distance: '15 km', icon: Car },
          { name: 'Sakleshpur Town', distance: '18 km', icon: Building },
          { name: 'Coffee Museum', distance: '20 km', icon: Utensils }
        ],
        businessOpportunities: [
          'Resort Development',
          'Coffee Processing Unit',
          'Adventure Tourism',
          'Event Management Venue',
          'Organic Farming',
          'Wellness Retreat Center'
        ],
        heroImage: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80'
      },
      '11.30': {
        title: '11.30 Acres Property',
        subtitle: 'Compact Excellence',
        price: 'Contact for Pricing',
        description: 'A perfectly sized 11.30-acre property ideal for those seeking a more intimate connection with nature while maintaining excellent accessibility and development potential.',
        highlights: [
          'Highway Access',
          'Coffee Plantation',
          'Scenic Location',
          'Development Ready',
          'Natural Water Source',
          'Peaceful Environment'
        ],
        attractions: [
          { name: 'Mullayyanagiri Peak', distance: '5 km', icon: TreePine },
          { name: 'Baba Budangiri', distance: '8 km', icon: TreePine },
          { name: 'Hebbe Falls', distance: '12 km', icon: TreePine },
          { name: 'Sakleshpur Town', distance: '18 km', icon: Building }
        ],
        businessOpportunities: [
          'Boutique Resort',
          'Coffee Cafe',
          'Farm Stay',
          'Retreat Center',
          'Event Venue'
        ],
        heroImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80'
      },
      '5': {
        title: '2.5 Acre Plots & 2.5 Acre Greenery',
        subtitle: 'Smart Investment',
        price: 'Contact for Pricing',
        description: 'Strategic 5.06-acre property divided into 2.5 acres of development plots and 2.5 acres of preserved greenery. Perfect for investors looking for manageable size with maximum potential for commercial and residential developments.',
        highlights: [
          'Manageable Property Size',
          'Highway Accessibility',
          'Coffee Plantation Area',
          'Investment Friendly',
          'Development Ready',
          'Natural Environment'
        ],
        attractions: [
          { name: 'Mullayyanagiri Peak', distance: '5 km', icon: TreePine },
          { name: 'Baba Budangiri', distance: '8 km', icon: TreePine },
          { name: 'Hebbe Falls', distance: '12 km', icon: TreePine },
          { name: 'Sakleshpur Town', distance: '18 km', icon: Building }
        ],
        businessOpportunities: [
          'Petrol Pump & Fuel Station',
          'Hotels & Restaurants',
          'Coffee Cafe & Shop',
          'Boutique Homestay',
          'Farm Experience Center',
          'Event Space',
          'Commercial Complexes',
          'Retail Outlets'
        ],
        heroImage: 'https://images.unsplash.com/photo-1464822759844-d150ad6d1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80'
      }
    };
    
    setProperty(properties[propertyType]);
  }, [propertyType]);

  if (!property) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={property.heroImage}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{property.title}</h1>
          <p className="text-xl text-green-300 mb-6">{property.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            {property.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {property.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nearby Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {property.attractions.map((attraction, index) => {
              const IconComponent = attraction.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <IconComponent className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 block">{attraction.name}</span>
                    <span className="text-gray-500 text-sm">Distance: {attraction.distance}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Opportunities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {property.businessOpportunities.map((opportunity, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl text-center border border-green-200">
                <span className="text-green-700 font-semibold text-lg">{opportunity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Ready to Explore This Property?</h2>
          <p className="text-green-100 text-center mb-8 text-lg">
            Contact us today to schedule a visit or get more information about this amazing opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919035609555"
              className="flex-1 max-w-xs bg-white text-green-600 font-semibold py-4 px-8 rounded-xl hover:bg-green-50 transition-colors flex items-center justify-center space-x-3"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/919035609555?text=Hi, I'm interested in the ${property.title} at Aura Properties`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-xs bg-green-700 text-white font-semibold py-4 px-8 rounded-xl hover:bg-green-800 transition-colors flex items-center justify-center space-x-3"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;