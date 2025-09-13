import { Leaf, Heart, Award, TreePine, Coffee, MapPin, Star, Route, Building, Droplets } from 'lucide-react';

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

  const connectivity = [
    {
      location: "Sakleshpur",
      distance: "15 minutes",
      description: "Major town with all amenities"
    },
    {
      location: "Chavlgere Toll",
      distance: "30 minutes", 
      description: "Highway connectivity hub"
    },
    {
      location: "Bengaluru",
      distance: "3 hours",
      description: "Major metropolitan city"
    }
  ];

  const attractions = [
    { name: "Manjarabad Star Fort", distance: "7 km" },
    { name: "Mokannana Falls", distance: "22 km" },
    { name: "Betta Bhairaveshwara Temple", distance: "41 km" },
    { name: "Bisile View Point", distance: "52 km" },
    { name: "Kukke Subramanya", distance: "Short drive" },
    { name: "Dharmasthala", distance: "Short drive" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            About Aura Properties
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Where nature, business, and opportunity meet – your gateway to endless possibilities 
            on 22.20 acres of prime land with National Highway frontage.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Welcome to the 22.20-acre Aura Property
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Welcome to the 22.20-acre Aura Property – your gateway to endless opportunities 
                  and a brighter future! Nestled in lush greenery, this estate already holds a 
                  profitable coffee plantation – <strong>income from Day One!</strong>
                </p>
                <p>
                  And that's not all – with a <strong>750-foot frontage right on National Highway 75</strong>, 
                  imagine the possibilities – an educational institution, resort, a restaurant, 
                  a hotel, homestays, even a petrol bunk!
                </p>
                <p>
                  With a perennial sweet-water canal flowing through, this land is not just fertile… 
                  <strong>it's alive!</strong>
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

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-earth-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Key Features & Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need for a successful business venture or investment opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-green-400 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Route className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                750 ft Highway Frontage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Prime location on National Highway 75 with excellent visibility and accessibility for any business venture.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Perennial Sweet-Water Canal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Year-round water supply flowing through the property ensures the land is fertile and alive.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TreePine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Profitable Coffee Plantation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Established coffee plantation providing immediate income from Day One of your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Endless Business Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The strategic location and ample space open doors to numerous profitable ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-400 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
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

      {/* Attractions & Connectivity */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Nearby Attractions */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
                Surrounded by Attractions
              </h2>
              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-500 mr-3" />
                      <span className="font-semibold text-gray-800">{attraction.name}</span>
                    </div>
                    <span className="text-green-600 font-medium">{attraction.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connectivity */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
                Outstanding Connectivity
              </h2>
              <div className="space-y-6">
                {connectivity.map((connection, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{connection.location}</h3>
                      <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm">
                        {connection.distance}
                      </span>
                    </div>
                    <p className="text-gray-600">{connection.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              This Isn't Just Land
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              It's a canvas for your vision – a hub of possibilities waiting for your touch. 
              Whether you're looking to establish a business, create a retreat, or make a smart investment, 
              Aura Properties provides the perfect foundation.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-earth-100 rounded-2xl p-8">
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
