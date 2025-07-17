import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (event) => {
    event.preventDefault();
    const footerElement = document.getElementById('Footer');
    footerElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, menuRef]);

  return (
    <nav className="flex items-center justify-between w-full px-6 py-6 md:px-16 md:pt-8 md:pb-8 z-30" ref={menuRef}>
      <Link to="/">
          <img
          className="w-28 md:w-30"
          src="https://qdioerqypevvqctowrbv.storage.supabase.co/v1/object/public/picton//Logo.svg"
          alt="Picton Logo"
        />
      </Link>

      <div className="hidden md:flex md:flex-row md:gap-8">
        <Link to="/OurServices" className="hover:text-amber-500">Our Services</Link>
        <Link to="/OurStory" className="hover:text-amber-500">Our Story</Link>
        <a href="#Footer" onClick={handleContactClick} className="hover:text-amber-500">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-700 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="absolute top-16 left-0 flex flex-col w-full p-6 bg-[#191919] shadow-md rounded-b-md md:hidden">
            <Link to="/OurServices" className="block py-4 hover:text-amber-500" onClick={toggleMenu}>Our Services</Link>
            <Link to="/OurStory" className="block py-4 hover:text-amber-500" onClick={toggleMenu}>Our Story</Link>
            <a href="#Footer" onClick={(e) => { handleContactClick(e); toggleMenu(); }} className="block py-4 hover:text-amber-500">
            Contact Us
          </a>
          </div>
      )}
    </nav>
  );
};

export default Header;