import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-64 w-64 bg-[#F5F5DC]/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-[#F4C2C2]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Newsletter section */}
      <div className="relative z-10 border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-10 lg:mb-0 text-center lg:text-left">
              <h3 className="font-luxury text-3xl text-[#708238] mb-3">
                Join Our <span className="text-[#D4AF37]">Community</span>
              </h3>
              <p className="font-modern text-gray-600 max-w-md">
                Subscribe to receive exclusive offers, rituals, and stories from our Ayurvedic journey.
              </p>
            </div>
            
            <div className="w-full max-w-md">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-[#F5F5DC]/30 border border-[#D4AF37]/20 py-3 px-4 font-modern text-sm focus:outline-none focus:border-[#D4AF37] rounded-l-sm"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] hover:bg-[#708238] text-white px-6 py-3 uppercase text-xs tracking-wider font-modern transition-colors duration-300 rounded-r-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <h1 className="text-[#D4AF37] font-luxury text-3xl tracking-wide mb-6">प्रकृति</h1>
              <p className="font-modern text-gray-600 mb-8 max-w-md">
                Embracing the ancient wisdom of Ayurveda to create luxurious, effective skincare that honors both tradition and innovation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#708238] hover:bg-[#D4AF37]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#708238] hover:bg-[#D4AF37]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#708238] hover:bg-[#D4AF37]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#708238] hover:bg-[#D4AF37]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h4 className="font-luxury text-lg text-[#708238] mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">About Us</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Collections</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Sustainability</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Press</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Careers</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-luxury text-lg text-[#708238] mb-5">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">FAQ</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Store Locator</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div id="contact">
              <h4 className="font-luxury text-lg text-[#708238] mb-5">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-modern text-sm text-gray-600">
                    42 Himalaya View, <br />
                    Rishikesh, Uttarakhand <br />
                    India, 249201
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:care@prakruti.com" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
                    care@prakruti.com
                  </a>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+919876543210" className="font-modern text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="relative z-10 border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-modern text-xs text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} प्रकृति Luxury Cosmetics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-modern text-xs text-gray-500 hover:text-[#D4AF37] transition-colors">Terms of Service</a>
              <a href="#" className="font-modern text-xs text-gray-500 hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="font-modern text-xs text-gray-500 hover:text-[#D4AF37] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;