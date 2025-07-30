import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../../LanguageSwitcher';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#ff6d05] shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-[150px] h-[90px]">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo/isdlogo.png"
            alt="ISKCON Dhanbad Logo"
            className="w-[65px] h-[65px] object-contain"
          />
        </Link>
        <LanguageSwitcher />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-white font-semibold text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>

          {/* Donate Dropdown */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-yellow-300">
              Donate
              <i className="bx bx-caret-down transition-transform group-hover:rotate-180"></i>
            </span>
            <div className="absolute top-full left-0 w-60 bg-gradient-to-b from-orange-500 to-orange-700 text-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
              <Link to="/donate/temple-construction" className="block px-4 py-2 hover:bg-orange-800">Temple Construction</Link>
              <Link to="/donate/anna-daan" className="block px-4 py-2 hover:bg-orange-800">Anna Daan</Link>
              
              <Link to="/donate/gita-daan" className="block px-4 py-2 hover:bg-orange-800">Gita Daan</Link>
              <Link to="/donate/tribal-care-seva" className="block px-4 py-2 hover:bg-orange-800">Tribal Care Seva</Link>
              <Link to="/donate/vaishnava-seva" className="block px-4 py-2 hover:bg-orange-800">Vaishnava Seva</Link>
              <Link to="/donate/nitya-seva" className="block px-4 py-2 hover:bg-orange-800">Nitya Seva</Link>
            </div>
          </div>


          <Link to="/gallery" className="hover:text-yellow-300 transition-colors">Gallery</Link>
          <Link to="/services" className="hover:text-yellow-300 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link>

          <Link
            to="/donate"
            className="ml-2 bg-white text-[#ff8307] rounded-full px-5 py-2 text-sm font-bold hover:shadow-lg hover:scale-105 transition-transform"
          >
            Donate
          </Link>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#ff6d05] text-white px-6 py-5 flex flex-col space-y-4 text-base">
          <Link to="/" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" className="hover:text-yellow-300" onClick={toggleMobileMenu}>About</Link>
          <Link to="/donate" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Donate</Link>

          <Link to="/gallery" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Gallery</Link>
          <Link to="/services" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Services</Link>
          <Link to="/contact" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Contact Us</Link>
          <Link
            to="/donate"
            className="bg-white text-[#ff8307] rounded-full px-4 py-2 text-sm font-bold text-center"
            onClick={toggleMobileMenu}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
};

export default Hero;
