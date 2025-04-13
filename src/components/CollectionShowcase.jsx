import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CollectionShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  // Function to scroll to Varieties section
  const scrollToProducts = () => {
    const varietiesSection = document.getElementById('varieties');
    if (varietiesSection) {
      varietiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="collaboration" 
      className="hidden lg:flex lg:flex-col lg:py-24 lg:bg-gradient-to-b lg:from-white lg:to-[#F5F5DC]/20 lg:min-h-screen lg:justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8 lg:mb-16" data-aos="fade-up">
          <span className="block font-modern text-sm uppercase tracking-widest text-[#708238]">
            Special Collaboration
          </span>
          <div className="flex items-center justify-center ml-20">
            <div className="rounded-lg">
              <img 
                src="/prakruti.png" 
                alt="Prakruti" 
                className="md:h-70 filter brightness-100" 
              />
            </div>
            <div className="text-[#D4AF37] text-3xl md:text-4xl font-luxury">x</div>
            <div className="mt-30 rounded-lg">
              <img 
                src="/komal.png" 
                alt="Komal.ed" 
                className="md:h-60 filter brightness-30" 
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center -mt-12 md:-mt-16">
        <div className="flex flex-col lg:flex-row items-center -mt-4 md:-mt-8">
            <div className="w-full lg:w-1/2 lg:pr-12 mb-6 lg:mb-0" data-aos="fade-right">
              <div className="prose prose-lg max-w-none">
                <p className="font-modern text-gray-700 mb-4 leading-relaxed text-sm lg:text-base">
                  We're proud to co-create a product that blends modern lip care with timeless, natural cosmetics.
                  While Komal focuses on practical, nourishing lip care for everyday needs, Prakriti brings back the elegance of India's beauty rituals with clean, plant-powered cosmetics.
                  This partnership celebrates a shared love for natural, skin-safe, and culturally rooted products. Together, we're launching a lightweight, hydrating lip gloss, combining Komal's signature ghee formula with Prakriti's natural cosmetic expertise for a product that's as nourishing as it is effortlessly wearable.
                </p>
              </div>

              <div className="mt-3 lg:mt-6">
                <button 
                  onClick={scrollToProducts}
                  className="bg-[#D4AF37] hover:bg-[#708238] text-white px-6 py-2 lg:px-8 lg:py-3 rounded-sm font-modern uppercase text-xs lg:text-sm tracking-wider transition-colors duration-300"
                >
                  View Collection
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-3 lg:gap-6">
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden shadow-lg h-40 md:h-60 lg:h-96">
                    <img 
                      src="/beetroot1.jpg" 
                      alt="Beetroot Collection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6 mt-4 lg:mt-12">
                  <div className="rounded-lg overflow-hidden shadow-lg h-40 md:h-60 lg:h-96">
                    <img 
                      src="https://images.unsplash.com/photo-1614849024120-2c6929170f51?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Herbal ingredients" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;