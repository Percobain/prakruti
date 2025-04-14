import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    name: "Rose Beetroot Gloss",
    description: "Rose scented beetroot gloss in collaboration with Komal",
    price: "₹2,400",
    image: "/beetroot.jpg",
    category: "Lip Care"
  },
  {
    id: 2,
    name: "Vegetable Carbon Kohl",
    description: "Pure, plant-derived carbon kohl for defining eyes with gentle, natural intensity",
    price: "₹2,850",
    image: "/kohl1.jpg",
    category: "Eye Essentials"
  },
  {
    id: 3,
    name: "Traditional Surma",
    description: "Hand-crafted traditional kohl made with pure herbs and minerals for defining eyes with natural elegance",
    price: "₹3,200",
    image: "/surma.webp",
    category: "Eye Essentials"
  },
  {
    id: 4,
    name: "Moroccan Clay Blush",
    description: "Subtle radiance with our mineral-rich Moroccan clay blush that doubles as a skin treatment",
    price: "₹3,400",
    image: "/moroccan-clay-blush.webp",
    category: "Cheek Tint"
  },
  {
    id: 5,
    name: "Kumkum & Stamps",
    description: "Sacred vermillion powder with traditional brass stamps for auspicious ceremonies and cultural occasions",
    price: "₹4,800",
    image: "/kumkum.jpg",
    category: "Cultural Cosmetics"
  },
  {
    id: 6,
    name: "Herbal Minis Collection",
    description: "Assorted aromatic minis for natural breath freshening and holistic wellness",
    price: "₹1,950",
    image: "/beetroot1.jpg",
    category: "Wellness Rituals"
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
    <section id="varieties" className="py-24 bg-[#F5F5DC]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-premium text-4xl md:text-5xl mb-4 text-[#708238]">Indigenous Treasures</h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="font-modern text-lg text-gray-700 max-w-3xl mx-auto">
            Rediscover the ancient beauty secrets through our collection of artisanal products 
            handcrafted with traditional techniques and pure botanical ingredients.
          </p>
        </div>

        {/* Changed to 3-column grid from 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="font-premium text-xl mt-2 text-gray-800 group-hover:text-[#708238] transition-colors">
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
        
        {/* Added id="sustainability" to this section for direct navigation from navbar */}
        <div id="sustainability" className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg inline-block">
            <h3 className="font-premium text-2xl text-[#708238] mb-4">Discover Our Eco-Friendly Approach</h3>
            <p className="font-modern text-sm text-gray-700 mb-6 max-w-2xl">
              All products come in sustainable metal packaging with refill options. 
              Our commitment to the planet is as strong as our dedication to your skin's health.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-[#F5F5DC] text-[#708238] text-xs px-4 py-2 rounded-full font-modern">Jute Packaging</span>
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