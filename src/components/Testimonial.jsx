import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    quote: "प्रकृति's Golden Elixir transformed my skincare routine. The quality is unmatched—I've never felt more confident in my natural glow.",
    author: "Priya Malhotra",
    role: "Beauty Enthusiast",
    image: "https://i.pinimg.com/280x280_RS/5e/87/b0/5e87b0ad163855c993d624a528649045.jpg"
  },
  {
    id: 2,
    quote: "As someone with sensitive skin, finding the Sacred Earth collection was a revelation. These products honor tradition while delivering extraordinary results.",
    author: "Amar Singh",
    role: "Wellness Advocate",
    image: "https://i.pinimg.com/280x280_RS/5e/87/b0/5e87b0ad163855c993d624a528649045.jpg"
  },
  {
    id: 3,
    quote: "The Himalayan Bloom facial oil has become my non-negotiable luxury. Worth every penny for the incredible scent and visible improvement in my skin's texture.",
    author: "Zara Ahmed",
    role: "Lifestyle Blogger",
    image: "https://i.pinimg.com/280x280_RS/5e/87/b0/5e87b0ad163855c993d624a528649045.jpg"
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#F5F5DC]/20"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#F4C2C2]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="block font-modern text-sm uppercase tracking-widest text-[#D4AF37] mb-4">
            Testimonials
          </span>
          <h2 className="font-luxury text-4xl md:text-5xl mb-5 text-[#708238]">
            Voices of <span className="text-[#D4AF37]">Devotion</span>
          </h2>
        </div>

        <div className="relative">
          {/* Large quote mark decoration */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="#D4AF37">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
          </div>

          {/* Testimonial cards */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
            <div className="w-full md:w-2/5 relative" data-aos="fade-right">
              <div className="aspect-[3/4] relative mx-auto md:mx-0 max-w-xs md:max-w-none">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex 
                        ? "opacity-100 translate-y-0 z-10" 
                        : "opacity-0 translate-y-8 z-0"
                    }`}
                  >
                    <div className="h-full rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative border */}
                    <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-3/5 flex flex-col justify-center" data-aos="fade-left">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === activeIndex 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 absolute"
                  }`}
                >
                  <blockquote className="font-luxury text-2xl md:text-3xl lg:text-4xl text-[#708238] italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-0.5 bg-[#D4AF37] mr-6"></div>
                    <div>
                      <p className="font-luxury text-lg text-[#708238]">{testimonial.author}</p>
                      <p className="font-modern text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation dots */}
              <div className="flex space-x-3 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-[#D4AF37] scale-125' : 'bg-[#D4AF37]/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;