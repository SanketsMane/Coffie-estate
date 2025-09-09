import { Leaf, Heart, Award, Users, TreePine, Coffee } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Committed to organic farming practices and environmental conservation"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Peaceful Living",
      description: "Creating a sanctuary where peace and tranquility reign supreme"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Maintaining the highest standards in everything we do"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building lasting relationships with visitors and local communities"
    }
  ];

  const reasons = [
    {
      title: "Prime Location",
      description: "Strategically located in the heart of Sakleshpur with excellent connectivity to major cities and transportation hubs."
    },
    {
      title: "Proven Investment",
      description: "Coffee plantations and agricultural land in Karnataka have shown consistent appreciation and strong rental yields."
    },
    {
      title: "Multiple Revenue Streams",
      description: "From coffee cultivation to eco-tourism, the estate offers diverse income opportunities."
    },
    {
      title: "Ready Infrastructure",
      description: "Pre-built residential and commercial structures reduce initial investment and setup time."
    },
    {
      title: "Natural Beauty",
      description: "Surrounded by pristine nature, offering a lifestyle that city living simply cannot match."
    },
    {
      title: "Growing Tourism",
      description: "Sakleshpur's popularity as a weekend destination ensures steady visitor flow for hospitality ventures."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-coffee-600 to-nature-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            About Malnadu Coffee Estate
          </h1>
          <p className="text-xl md:text-2xl text-coffee-100 max-w-4xl mx-auto leading-relaxed">
            A story of passion, sustainability, and the pursuit of creating the perfect 
            coffee sanctuary in the heart of Karnataka's beautiful Western Ghats.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold gradient-text mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Nestled in the pristine hills of Sakleshpur, Malnadu Coffee Estate represents 
                  more than just a piece of land – it's a vision of sustainable living, organic 
                  farming, and peaceful coexistence with nature.
                </p>
                <p>
                  Our 11.30-acre estate has been carefully developed to showcase the best of 
                  Karnataka's coffee culture while providing modern amenities and infrastructure. 
                  With 7 acres dedicated to coffee plantation and organic farming, we've created 
                  a model for sustainable agriculture that benefits both the environment and the community.
                </p>
                <p>
                  The estate features two residential buildings and one hotel building, making it 
                  perfect for both permanent residence and hospitality ventures. Our commitment to 
                  quality and sustainability ensures that every aspect of the estate is designed 
                  with care for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee plantation story"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-earth-50 to-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold gradient-text mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do at Malnadu Coffee Estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-coffee-500 to-nature-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold gradient-text mb-6">
              Estate in Detail
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every aspect of Malnadu Coffee Estate has been thoughtfully planned and developed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <TreePine className="h-12 w-12 text-nature-600 mr-4" />
                <h3 className="font-playfair text-2xl font-bold text-gray-800">
                  Coffee Plantation
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our 7-acre coffee plantation is the heart of the estate. Featuring premium 
                Arabica and Robusta varieties grown using organic methods, the plantation 
                produces high-quality beans that capture the essence of Malnad coffee.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Organic cultivation methods</li>
                <li>• Premium coffee varieties</li>
                <li>• Sustainable farming practices</li>
                <li>• Year-round production potential</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574932194515-47997e6bbf75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee plantation detail"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Estate buildings"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <Coffee className="h-12 w-12 text-coffee-600 mr-4" />
                <h3 className="font-playfair text-2xl font-bold text-gray-800">
                  Infrastructure & Buildings
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The estate features well-constructed buildings designed to complement the 
                natural surroundings while providing modern comfort and functionality.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Two residential buildings</li>
                <li>• One hotel/guest building</li>
                <li>• Modern amenities throughout</li>
                <li>• Sustainable design principles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Reasons */}
      <section className="py-20 bg-gradient-to-br from-coffee-50 to-nature-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold gradient-text mb-6">
              Why Choose Malnadu?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compelling reasons why Malnadu Coffee Estate represents an exceptional 
              opportunity for investment and lifestyle enhancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-coffee-600 to-nature-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl text-coffee-100 mb-8 leading-relaxed">
            Whether you're looking for a peaceful retreat, a sustainable investment, 
            or a new way of life, Malnadu Coffee Estate welcomes you to join our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919035609555"
              className="bg-white text-coffee-600 font-semibold py-4 px-8 rounded-full hover:bg-coffee-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Call +91 90356 09555
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-coffee-600 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
