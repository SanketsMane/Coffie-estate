import Hero from '../components/Hero';
import Features from '../components/Features';
import NearbyAttractions from '../components/NearbyAttractions';
import Transport from '../components/Transport';
import Inquiry from '../components/Inquiry';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Gallery />
      <NearbyAttractions />
      <Transport />
      <Testimonials />
      <Inquiry />
    </div>
  );
};

export default Home;
