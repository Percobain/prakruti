// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 shadow-md py-3" : "bg-white/70 py-4"
    } backdrop-blur-md border-b border-[#D4AF37]/30`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D4AF37" strokeWidth="1.5"/>
              <path d="M12 6V18" stroke="#708238" strokeWidth="1.5"/>
              <path d="M16 10L12 6L8 10" stroke="#708238" strokeWidth="1.5"/>
              <path d="M16 14L12 18L8 14" stroke="#708238" strokeWidth="1.5"/>
            </svg>
          </div>
          <h1 className="text-[#D4AF37] font-luxury text-2xl tracking-wide">प्रकृति</h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[#708238] font-modern text-sm uppercase tracking-wider">
          <li className="hover:text-[#D4AF37] cursor-pointer transition duration-200">Home</li>
          <li className="relative group">
            <span className="hover:text-[#D4AF37] cursor-pointer transition duration-200 flex items-center">
              Collections
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md shadow-lg rounded-sm border border-[#D4AF37]/20 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <a href="#" className="block px-3 py-2 text-[#708238] hover:bg-[#F5F5DC]/50 hover:text-[#D4AF37] rounded-sm">Veda Kohl Collection</a>
              <a href="#" className="block px-3 py-2 text-[#708238] hover:bg-[#F5F5DC]/50 hover:text-[#D4AF37] rounded-sm">Kumkum Rituals</a>
              <a href="#" className="block px-3 py-2 text-[#708238] hover:bg-[#F5F5DC]/50 hover:text-[#D4AF37] rounded-sm">Plant Tints</a>
              <a href="#" className="block px-3 py-2 text-[#708238] hover:bg-[#F5F5DC]/50 hover:text-[#D4AF37] rounded-sm">Mini Collection</a>
            </div>
          </li>
          <li className="hover:text-[#D4AF37] cursor-pointer transition duration-200">About</li>
          <li className="hover:text-[#D4AF37] cursor-pointer transition duration-200">Sustainability</li>
          <li className="hover:text-[#D4AF37] cursor-pointer transition duration-200">Contact</li>
        </ul>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center space-x-5">
          <button className="text-[#708238] hover:text-[#D4AF37] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-[#708238] hover:text-[#D4AF37] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <button className="bg-[#708238]/10 hover:bg-[#708238]/20 text-[#708238] px-4 py-2 rounded-sm text-xs font-modern uppercase tracking-wider transition-colors duration-300">
            Login
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-[#708238] hover:text-[#D4AF37] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#D4AF37]/10 mt-3">
          <div className="px-6 py-4">
            <ul className="space-y-4 font-modern text-sm uppercase tracking-wider">
              <li className="py-2"><a href="#" className="block text-[#708238] hover:text-[#D4AF37]">Home</a></li>
              <li className="py-2 border-t border-[#D4AF37]/10">
                <a href="#" className="block text-[#708238] hover:text-[#D4AF37] mt-2">Collections</a>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><a href="#" className="block text-[#708238]/80 hover:text-[#D4AF37] text-xs py-1">Veda Kohl Collection</a></li>
                  <li><a href="#" className="block text-[#708238]/80 hover:text-[#D4AF37] text-xs py-1">Kumkum Rituals</a></li>
                  <li><a href="#" className="block text-[#708238]/80 hover:text-[#D4AF37] text-xs py-1">Plant Tints</a></li>
                  <li><a href="#" className="block text-[#708238]/80 hover:text-[#D4AF37] text-xs py-1">Mini Collection</a></li>
                </ul>
              </li>
              <li className="py-2 border-t border-[#D4AF37]/10"><a href="#" className="block text-[#708238] hover:text-[#D4AF37] mt-2">About</a></li>
              <li className="py-2 border-t border-[#D4AF37]/10"><a href="#" className="block text-[#708238] hover:text-[#D4AF37] mt-2">Sustainability</a></li>
              <li className="py-2 border-t border-[#D4AF37]/10"><a href="#" className="block text-[#708238] hover:text-[#D4AF37] mt-2">Contact</a></li>
            </ul>
            <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-[#D4AF37]/10">
              <button className="text-[#708238]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-[#708238]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button className="flex-1 bg-[#708238]/10 hover:bg-[#708238]/20 text-[#708238] py-2 rounded-sm text-xs font-modern uppercase tracking-wider">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;