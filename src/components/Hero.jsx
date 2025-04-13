import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#F5F5DC]/30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4C2C2]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0" data-aos="fade-right">
            <span className="block mb-4 font-modern text-sm uppercase tracking-widest text-[#708238]">
              Pure • Natural • Luxurious
            </span>
            <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl leading-tight text-[#708238] mb-6">
              Nature's Own <br />
              <span className="text-[#D4AF37]">For Your Skin</span>
            </h1>
            <p className="font-modern text-gray-700 md:text-lg max-w-lg mb-8 leading-relaxed">
              Indulge in the ancient secrets of botanical beauty with our premium collection
              of natural cosmetics inspired by centuries of Ayurvedic wisdom.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-[#D4AF37] hover:bg-[#708238] text-white px-8 py-3 rounded-sm font-modern uppercase text-sm tracking-wider transition-colors duration-300"
                onClick={() => {
                  document.getElementById('varieties').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Collection
              </button>
              <button 
                className="bg-transparent hover:bg-[#F5F5DC] border border-[#708238] text-[#708238] px-8 py-3 rounded-sm font-modern uppercase text-sm tracking-wider transition-colors duration-300"                   
                onClick={() => {
                  document.getElementById('brandstory').scrollIntoView({ behavior: 'smooth' });
                }} 
              >
                Our Story
              </button>
            </div>
          </div>
          
          {/* Image content */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/prakruti.png"
                  alt="Luxury Cosmetic Products"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div 
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur shadow-lg rounded-lg p-4 w-36 rotate-3"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <div className="w-8 h-8 rounded-full bg-[#F4C2C2] mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-xs text-[#708238] font-luxury">100% Natural Ingredients</p>
              </div>
              
              <div 
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur shadow-lg rounded-lg p-4 w-40 -rotate-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <p className="text-xs text-[#708238] font-luxury">Ethically Sourced</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="block mb-2 font-modern text-xs uppercase text-[#708238] tracking-wider">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#D4AF37" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;