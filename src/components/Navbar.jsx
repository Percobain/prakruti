import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const collectionsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (collectionsRef.current && !collectionsRef.current.contains(event.target)) {
        setCollectionsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to scroll to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setCollectionsOpen(false);
    }
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 shadow-md py-3" : "bg-white/70 py-4"
    } backdrop-blur-md border-b border-[#D4AF37]/30`}>
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <img src="/writtenlogo.png" alt="Prakruti" className="h-7 w-auto" />
        </div>
      </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[#708238] font-modern text-sm uppercase tracking-wider">
          <li 
            className="hover:text-[#D4AF37] cursor-pointer transition duration-200"
            onClick={() => scrollToSection('root')}
          >
            Home
          </li>
          
          {/* Collections Dropdown */}
          <li className="relative" ref={collectionsRef}>
            <button 
              className="flex items-center hover:text-[#D4AF37] cursor-pointer transition duration-200"
              onClick={() => setCollectionsOpen(!collectionsOpen)}
            >
              COLLECTIONS
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${collectionsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {collectionsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md shadow-md rounded-sm border border-[#D4AF37]/20 py-2 z-20">
                <div 
                  className="px-4 py-2 hover:bg-[#F5F5DC]/50 text-[#708238] hover:text-[#D4AF37] cursor-pointer transition-colors"
                  onClick={() => scrollToSection('varieties')}
                >
                  Products
                </div>
                <div 
                  className="px-4 py-2 hover:bg-[#F5F5DC]/50 text-[#708238] hover:text-[#D4AF37] cursor-pointer transition-colors"
                  onClick={() => scrollToSection('collaboration')}
                >
                  प्रकृति x Komal
                </div>
              </div>
            )}
          </li>
          
          <li 
            className="hover:text-[#D4AF37] cursor-pointer transition duration-200"
            onClick={() => scrollToSection('brandstory')}
          >
            About
          </li>
          
          {/* Updated Sustainability link to point to the sustainability section */}
          <li 
            className="hover:text-[#D4AF37] cursor-pointer transition duration-200"
            onClick={() => scrollToSection('sustainability')}
          >
            Sustainability
          </li>
          
          <li 
            className="hover:text-[#D4AF37] cursor-pointer transition duration-200"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>
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
              <li className="py-2">
                <div 
                  className="block text-[#708238] hover:text-[#D4AF37] cursor-pointer"
                  onClick={() => scrollToSection('root')}
                >
                  Home
                </div>
              </li>
              
              {/* Mobile Collections Sub-menu */}
              <li className="py-2 border-t border-[#D4AF37]/10">
                <div className="mt-2">
                  <div className="flex items-center justify-between text-[#708238]">
                    <span>Collections</span>
                    <button onClick={() => setCollectionsOpen(!collectionsOpen)}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 transition-transform duration-200 ${collectionsOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {collectionsOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <div 
                        className="block py-2 pl-2 border-l-2 border-[#D4AF37]/20 text-[#708238] hover:text-[#D4AF37] hover:border-[#D4AF37] cursor-pointer transition-colors"
                        onClick={() => scrollToSection('varieties')}
                      >
                        Products
                      </div>
                      <div 
                        className="block py-2 pl-2 border-l-2 border-[#D4AF37]/20 text-[#708238] hover:text-[#D4AF37] hover:border-[#D4AF37] cursor-pointer transition-colors"
                        onClick={() => scrollToSection('collaboration')}
                      >
                        प्रकृति x Komal.ed
                      </div>
                    </div>
                  )}
                </div>
              </li>
              
              <li className="py-2 border-t border-[#D4AF37]/10">
                <div 
                  className="block text-[#708238] hover:text-[#D4AF37] mt-2 cursor-pointer"
                  onClick={() => scrollToSection('brandstory')}
                >
                  About
                </div>
              </li>
              
              <li className="py-2 border-t border-[#D4AF37]/10">
                <div 
                  className="block text-[#708238] hover:text-[#D4AF37] mt-2 cursor-pointer"
                  onClick={() => scrollToSection('sustainability')}
                >
                  Sustainability
                </div>
              </li>
              
              <li className="py-2 border-t border-[#D4AF37]/10">
                <div 
                  className="block text-[#708238] hover:text-[#D4AF37] mt-2 cursor-pointer"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </div>
              </li>
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