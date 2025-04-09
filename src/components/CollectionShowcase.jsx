import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const collections = [
  {
    id: 1,
    name: "Royal Gold",
    description: "Infused with 24K gold for ultimate radiance and luxury",
    image: "https://images.unsplash.com/photo-1710971228630-f59c4cb257a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: "12 products",
    color: "#D4AF37"
  },
  {
    id: 2,
    name: "Himalayan Bloom",
    description: "Rare floral extracts from the pristine Himalayan valleys",
    image: "https://images.unsplash.com/photo-1602313335037-688c1646d7a5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: "9 products",
    color: "#F4C2C2"
  },
  {
    id: 3,
    name: "Sacred Earth",
    description: "Clay-based formulations with ancient healing properties",
    image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?q=80&w=1000&auto=format&fit=crop",
    products: "8 products",
    color: "#708238"
  }
];

const CollectionShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F5DC]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="block font-modern text-sm uppercase tracking-widest text-[#708238] mb-4">
            Our Collections
          </span>
          <h2 className="font-luxury text-4xl md:text-5xl mb-5 text-[#708238]">
            Curated for <span className="text-[#D4AF37]">Perfection</span>
          </h2>
          <p className="font-modern text-gray-700 max-w-3xl mx-auto">
            Each collection tells a unique story of heritage, innovation and natural excellence.
            Discover the perfect ritual for your skin's journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="group relative rounded-lg overflow-hidden bg-white shadow-xl h-[36rem]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 z-0">
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60"
                ></div>
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div 
                  className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: collection.color }}
                >
                  <span className="text-white font-luxury text-xl">{collection.id}</span>
                </div>
                
                <h3 className="font-luxury text-3xl text-white mb-3">{collection.name}</h3>
                <p className="font-modern text-white/80 mb-6 max-w-xs">
                  {collection.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm font-modern">
                    {collection.products}
                  </span>
                  <button 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white text-xs font-modern uppercase tracking-wider py-2 px-4 rounded-sm transition-colors"
                  >
                    Explore
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-24 h-24 border border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 right-10 w-16 h-16 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <button className="bg-[#D4AF37] hover:bg-[#708238] text-white px-8 py-3 rounded-sm font-modern uppercase text-sm tracking-wider transition-colors duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;