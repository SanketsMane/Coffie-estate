import { Phone, MapPin, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import auraLogo from '../assets/aura-logo.png';

const Hero = () => {
  const backgroundImage = "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80";
  const fallbackImage = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80";
  // Using the compressed AURA video
  const heroVideo = "/videos/aura-hero.mp4";

  return (
    <section className="relative hero-section flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <VideoBackground
          src={heroVideo}
          fallbackImage={fallbackImage}
          className="w-full h-full"
          showControls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-28">
        <div className="flex justify-center mb-4 sm:mb-6">
          <img 
            src={auraLogo} 
            alt="Aura Properties Logo" 
            className="hero-logo h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
            style={{ 
              filter: 'brightness(0) invert(1)',
              WebkitFilter: 'brightness(0) invert(1)'
            }}
          />
        </div>
        
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 leading-tight"
          style={{ 
            fontFamily: "'Poppins', sans-serif", 
            fontWeight: '600'
          }}
        >
          <span className="block text-green-300">
            Your Gateway to Opportunity
          </span>
          <span 
            className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-earth-200 mt-2"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: '300'
            }}
          >
            Nature • Business • Opportunity
          </span>
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 text-earth-100 font-light leading-relaxed max-w-2xl mx-auto px-2">
          Exceptional coffee estate properties with endless investment potential in nature's paradise
        </p>

        {/* Property Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-4 sm:mb-5 max-w-4xl mx-auto px-2">
          <Link 
            to="/property/22-acres"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto block text-center"
          >
            <div className="text-center">
              <div className="text-base sm:text-lg font-bold">22.20 Acres</div>
              <div className="text-xs text-blue-200">Premium Estate</div>
            </div>
          </Link>
          
          <Link 
            to="/property/11-acres"
            className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto block text-center"
          >
            <div className="text-center">
              <div className="text-base sm:text-lg font-bold">11.30 Acres</div>
              <div className="text-xs text-teal-200">Compact Excellence</div>
            </div>
          </Link>

          <Link 
            to="/property/5-acres"
            className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto block text-center"
          >
            <div className="text-center">
              <div className="text-base sm:text-lg font-bold">5.06 Acres</div>
              <div className="text-xs text-slate-200">Smart Investment</div>
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center mb-4 sm:mb-6">
          <a 
            href="https://wa.me/919035609555?text=Hi, I'm interested in Aura Properties" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 backdrop-blur-sm border border-white text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-5 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center space-x-2 text-xs sm:text-sm"
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Contact Us via WhatsApp</span>
          </a>
        </div>


      </div>
    </section>
  );
};

export default Hero;
