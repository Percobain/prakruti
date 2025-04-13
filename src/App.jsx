import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import CollectionShowcase from './components/CollectionShowcase';
import Varieties from './components/Varieties';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="font-hatton text-gray-800 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <CollectionShowcase />
        <Varieties />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;