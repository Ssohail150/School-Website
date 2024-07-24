import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">&copy; 2024 Springdale Public School</p>
        <p className="text-sm">All rights reserved</p>
        <div className="mt-4">
          <a href="mailto:info@springdale.edu" className="text-blue-300 hover:text-blue-500 transition-colors duration-300">info@springdale.edu</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
