import { Leaf, Heart, Award, TreePine, Coffee, Route, Building, Droplets } from 'lucide-react';

const About = () => {
  const opportunities = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Educational Institution",
      description: "Perfect location and space for establishing world-class educational facilities"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Resort & Hotel",
      description: "Capitalize on Sakleshpur's growing tourism with luxury hospitality ventures"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Restaurant & Homestays",
      description: "Create authentic experiences for visitors seeking nature and local culture"
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: "Petrol Bunk & Commercial",
      description: "Strategic highway location ideal for fuel stations and commercial ventures"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Aura Properties
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in premium coffee estate investments in Karnataka's beautiful Sakleshpur region.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Your Gateway to Coffee Estate Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Aura Properties is a leading real estate company specializing in premium coffee estate 
                  properties in Karnataka's scenic Sakleshpur region. We offer exclusive investment 
                  opportunities that combine <strong>natural beauty with profitable returns</strong>.
                </p>
                <p>
                  Our carefully curated properties feature <strong>National Highway frontage</strong>, 
                  ensuring excellent connectivity and endless business possibilities. From established 
                  coffee plantations to development-ready land, we provide diverse investment options.
                </p>
                <p>
                  With our deep understanding of the local market and commitment to transparency, 
                  <strong>we make your property investment journey seamless and rewarding</strong>.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Aura Properties landscape"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Endless Business Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The strategic location and ample space open doors to numerous profitable ventures
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {opportunities.map((opportunity, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              This Isn't Just Land
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              It's a canvas for your vision – a hub of possibilities waiting for your touch. 
              Whether you're looking to establish a business, create a retreat, or make a smart investment, 
              Aura Properties provides the perfect foundation.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Aura Properties – Your Gateway to Opportunity!
              </h3>
              <p className="text-lg text-gray-700">
                Where nature, business, and opportunity meet in perfect harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Your Opportunities?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Contact us today to schedule a visit and discover the endless possibilities 
            that await at Aura Properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919035609555"
              className="bg-white text-green-600 font-semibold py-4 px-8 rounded-full hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              📞 Call +91 90356 09555
            </a>
            <a 
              href="https://wa.me/919035609555?text=Hi, I want to know more about Aura Properties"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
