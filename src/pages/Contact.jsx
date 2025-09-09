import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 90356 09555"],
      action: "tel:+919035609555",
      actionText: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@malnaducoffee.com"],
      action: "mailto:info@malnaducoffee.com",
      actionText: "Send Email"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Sakleshpur", "Hassan District, Karnataka"],
      action: "https://maps.google.com/?q=Sakleshpur,Hassan,Karnataka",
      actionText: "View on Map"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      details: ["Within 24 hours", "Monday to Sunday"],
      action: "#",
      actionText: "Learn More"
    }
  ];

  const faqs = [
    {
      question: "Can I visit the estate before making any commitments?",
      answer: "Absolutely! We encourage all potential investors and interested parties to visit the estate. We can arrange guided tours to show you all the features and answer any questions."
    },
    {
      question: "What documents are available for the property?",
      answer: "All legal documents including land conversion certificates, title deeds, and clearances are available. We maintain complete transparency in all documentation."
    },
    {
      question: "Is financing available for the purchase?",
      answer: "We can help connect you with financial institutions that specialize in agricultural and rural property financing. Our team can assist with the application process."
    },
    {
      question: "What are the ongoing costs of maintaining the estate?",
      answer: "Maintenance costs vary depending on your usage plans. We can provide detailed cost breakdowns for different scenarios including residential use, coffee farming, and hospitality operations."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-coffee-600 to-nature-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-coffee-100 max-w-4xl mx-auto leading-relaxed">
            Ready to start your journey with Malnadu Coffee Estate? We're here to help 
            you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 bg-gradient-to-br from-earth-50 to-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-coffee-500 to-nature-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                <a 
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-gradient-to-r from-coffee-600 to-coffee-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-block"
                >
                  {info.actionText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-coffee-50 to-nature-50 rounded-2xl p-8">
              <h2 className="font-playfair text-3xl font-bold gradient-text mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your interest in the estate..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-coffee-600 to-coffee-500 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="font-medium text-lg">Interactive Map</p>
                  <p className="text-sm">Google Maps integration</p>
                  <a 
                    href="https://maps.google.com/?q=Sakleshpur,Hassan,Karnataka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-gradient-to-r from-coffee-600 to-coffee-500 text-white font-semibold py-2 px-6 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-coffee-600 to-nature-600 text-white rounded-2xl p-8">
                <h3 className="font-playfair text-2xl font-bold mb-6">
                  Need Immediate Assistance?
                </h3>
                <p className="text-coffee-100 mb-6">
                  For urgent inquiries or to schedule an immediate visit, feel free to call us directly.
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+919035609555"
                    className="bg-white text-coffee-600 font-semibold py-3 px-6 rounded-full hover:bg-coffee-50 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+91 90356 09555</span>
                  </a>
                  <a 
                    href="mailto:info@malnaducoffee.com"
                    className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-coffee-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-earth-50 to-coffee-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold gradient-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Find answers to the most common questions about Malnadu Coffee Estate
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                  <MessageCircle className="h-6 w-6 text-coffee-600 mt-1 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <a 
              href="tel:+919035609555"
              className="bg-gradient-to-r from-coffee-600 to-coffee-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
