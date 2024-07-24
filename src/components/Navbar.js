import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300 transition-colors duration-300">
          Springdale Public School
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/about-us" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">About Us</Link>
          <Link to="/academics" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">Academics</Link>
          <Link to="/admissions" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">Admissions</Link>
          <Link to="/faculty" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">Faculty</Link>
          <Link to="/students" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">Students</Link>
          <Link to="/gallery" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">Gallery</Link>
          <Link to="/contact-us" className="text-white text-lg hover:text-yellow-400 transition-colors duration-300">Contact Us</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <Link to="/" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">Home</Link>
        <Link to="/about-us" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">About Us</Link>
        <Link to="/academics" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">Academics</Link>
        <Link to="/admissions" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">Admissions</Link>
        <Link to="/faculty" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">Faculty</Link>
        <Link to="/students" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">Students</Link>
        <Link to="/gallery" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">Gallery</Link>
        <Link to="/contact-us" className="block text-white text-lg py-2 hover:text-yellow-400 transition-colors duration-300">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
