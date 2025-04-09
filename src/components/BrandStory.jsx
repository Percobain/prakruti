import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute right-0 top-0 h-96 w-96 bg-[#F5F5DC]/50 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 h-64 w-64 bg-[#F4C2C2]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image columns */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-4 pr-0 lg:pr-12">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1728682626063-c12da4b7c4b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Ayurvedic herbs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1731514521203-a1dc7c3fdfa7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Traditional Ayurvedic process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1614849024120-2c6929170f51?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Herbal ingredients" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop" 
                    alt="Metal Ayurvedic containers" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 lg:pl-12" data-aos="fade-left">
            <span className="block font-modern text-sm uppercase tracking-widest text-[#D4AF37] mb-4">Our Legacy</span>
            <h2 className="font-luxury text-4xl md:text-5xl mb-8 text-[#708238] leading-tight">
              The Art of <br/><span className="text-[#D4AF37]">Ayurvedic Beauty</span>
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="font-modern text-gray-700 mb-6 leading-relaxed">
                Founded in the foothills of the Himalayas in 2010, प्रकृति (Prakruti) was born from a deep reverence for 
                nature's wisdom and ancient Ayurvedic traditions passed down through generations.
              </p>
              
              <p className="font-modern text-gray-700 mb-6 leading-relaxed">
                Our founder, Gaara, grew up learning the secrets of botanical formulations from her grandmother, 
                creating traditional Kumkum, Surma, and herbal tints using indigenous practices. These cherished recipes, 
                refined over centuries, form the heart of our exclusive collections.
              </p>
              
              <p className="font-modern text-gray-700 mb-8 leading-relaxed">
                Every प्रकृति product embodies our commitment to purity and sustainability. From our beetroot lip tints 
                to vegetable carbon kohl, we use plant-heavy ingredients that nourish rather than harm, packaged in 
                eco-friendly, refillable metal containers honoring ancient traditions.
              </p>
            </div>

            <div className="flex items-center space-x-8 mt-12">
              <div data-aos="fade-up" data-aos-delay="100">
                <span className="block text-4xl font-luxury text-[#D4AF37]">100%</span>
                <span className="block text-xs uppercase tracking-wider font-modern text-gray-600 mt-1">Plant-based</span>
              </div>
              
              <div className="h-12 w-px bg-[#F5F5DC]"></div>
              
              <div data-aos="fade-up" data-aos-delay="200">
                <span className="block text-4xl font-luxury text-[#D4AF37]">Zero</span>
                <span className="block text-xs uppercase tracking-wider font-modern text-gray-600 mt-1">Synthetics</span>
              </div>
              
              <div className="h-12 w-px bg-[#F5F5DC]"></div>
              
              <div data-aos="fade-up" data-aos-delay="300">
                <span className="block text-4xl font-luxury text-[#D4AF37]">13</span>
                <span className="block text-xs uppercase tracking-wider font-modern text-gray-600 mt-1">Years</span>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="#" 
                className="inline-block font-modern text-sm uppercase tracking-wider border-b-2 border-[#D4AF37] pb-1 text-[#708238] hover:text-[#D4AF37] transition-colors"
              >
                Discover Our Full Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;