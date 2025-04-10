import React, { useState } from "react";
import spoon from "../assets/Frame.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#da291c] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex">
          {/* Logo - visible on all screens */}
          <div className="text-xl font-bold flex items-center mr-15">
            <img src={spoon} alt="logo" />
            Restaurant
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" className="hover:text-yellow-300">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-300">
              About
            </a>
            <a href="#portfolio" className="hover:text-yellow-300">
              Portfolio
            </a>
            <a href="#clients" className="hover:text-yellow-300">
              Clients
            </a>
            <a href="#blog" className="hover:text-yellow-300">
              Blog
            </a>
            <a href="#contact" className="hover:text-yellow-300">
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Menu Button - visible only on mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Book Table Button - hidden on mobile, visible on desktop */}
        <a
          href="#contact"
          className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300"
        >
          BOOK A TABLE
        </a>
      </div>

      {/* Mobile Menu - appears when burger is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#da291c] py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-yellow-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#clients"
              className="hover:text-yellow-300"
              onClick={toggleMenu}
            >
              clients
            </a>
            <a
              href="#blog"
              className="hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 text-center"
              onClick={toggleMenu}
            >
              BOOK A TABLE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
