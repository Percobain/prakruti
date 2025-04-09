import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    name: "Beetroot Lip Tint",
    description: "Natural pigments from organic beetroot for a vibrant, hydrating tint that nourishes your lips",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1555037015-1498966bcd7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lip Care"
  },
  {
    id: 2,
    name: "Saffron Rose Facial Oil",
    description: "Luxurious blend of precious saffron and Himalayan rose essential oils",
    price: "₹5,800",
    image: "https://images.unsplash.com/photo-1621478404343-61e0c4089a55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Facial Oils"
  },
  {
    id: 3,
    name: "Traditional Kumkum",
    description: "Hand-crafted kumkum with natural mineral pigments and rose petals in decorative stamps",
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop",
    category: "Ceremonial"
  },
  {
    id: 4,
    name: "Moroccan Clay Blush",
    description: "Subtle radiance with our mineral-rich Moroccan clay blush that doubles as a skin treatment",
    price: "₹1,400",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop",
    category: "Face Color"
  }
];

const Varieties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="py-24 bg-[#F5F5DC]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-luxury text-4xl md:text-5xl mb-4 text-[#708238]">Indigenous Treasures</h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="font-modern text-lg text-gray-700 max-w-3xl mx-auto">
            Rediscover the ancient beauty secrets through our collection of artisanal products 
            handcrafted with traditional techniques and pure botanical ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative overflow-hidden rounded-lg bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white border-t border-[#D4AF37]/10">
                <span className="text-xs font-modern uppercase tracking-wider text-[#D4AF37]">
                  {product.category}
                </span>
                <h3 className="font-luxury text-xl mt-2 text-gray-800 group-hover:text-[#708238] transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600 font-modern text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#708238] text-xs opacity-80 font-modern">
                    {product.price}
                  </span>
                  <button className="bg-transparent hover:bg-[#D4AF37]/10 border border-[#D4AF37] text-[#708238] text-xs font-modern uppercase tracking-wider py-2 px-4 rounded-sm transition-colors">
                    Discover
                  </button>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D4AF37" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg inline-block">
            <h3 className="font-luxury text-2xl text-[#708238] mb-4">Discover Our Eco-Friendly Approach</h3>
            <p className="font-modern text-sm text-gray-700 mb-6 max-w-2xl">
              All products come in sustainable metal packaging with refill options. 
              Our commitment to the planet is as strong as our dedication to your skin's health.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-[#F5F5DC] text-[#708238] text-xs px-4 py-2 rounded-full font-modern">Refillable Packaging</span>
              <span className="bg-[#F5F5DC] text-[#708238] text-xs px-4 py-2 rounded-full font-modern">Zero Waste</span>
              <span className="bg-[#F5F5DC] text-[#708238] text-xs px-4 py-2 rounded-full font-modern">Metal Containers</span>
            </div>
            <a 
              href="#" 
              className="inline-block font-modern text-sm uppercase tracking-wider border-b-2 border-[#D4AF37] pb-1 text-[#708238] hover:text-[#D4AF37] transition-colors"
            >
              Learn About Our Sustainability Practices
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Varieties;