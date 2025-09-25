import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import Property22Page from './pages/Property22Page';
import Property11Page from './pages/Property11Page';
import Property5Page from './pages/Property5Page';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-earth-50">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/22-acres" element={<Property22Page />} />
          <Route path="/property/11-acres" element={<Property11Page />} />
          <Route path="/property/5-acres" element={<Property5Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
