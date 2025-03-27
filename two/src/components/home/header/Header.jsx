import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll to top aur navigate function
  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between py-3 px-6 bg-opacity-70 backdrop-blur-lg text-white shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-200">DreamCode</div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 ml-[-40px]">
        <button
          className="text-gray-300 hover:text-gray-100 transition"
          onClick={() => handleNavigation("/explore")}
        >
          Explore
        </button>
        <button
          className="text-gray-300 hover:text-gray-100 transition"
          onClick={() => handleNavigation("/product")}
        >
          Product
        </button>
        <button
          className="text-gray-300 hover:text-gray-100 transition"
          onClick={() => handleNavigation("/developer")}
        >
          Developer
        </button>
        <button
          className="text-gray-300 hover:text-gray-100 transition"
          onClick={() => handleNavigation("/signin")}
        >
          Sign In
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-12 right-4 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-lg md:hidden flex flex-col items-start space-y-4 z-50">
          <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/explore")}>Explore</button>
          <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/product")}>Product</button>
          <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/developer")}>Developer</button>
          <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/signin")}>Sign In</button>
        </div>
      )}
    </header>
  );
};

export default Header;
