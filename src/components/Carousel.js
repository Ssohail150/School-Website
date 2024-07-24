import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

const Carousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <ResponsiveCarousel 
        showThumbs={false} 
        autoPlay 
        interval={3000} 
        infiniteLoop
      >
        <div>
          <img 
            src="/images/sports_day.jpeg" 
            alt="Annual Sports Day" 
            className="w-full h-100 object-cover" 
          />
          <p className="legend text-center text-lg mt-2">Annual Sports Day</p>
        </div>
        <div>
          <img 
            src="/images/science_exhibition.jpeg" 
            alt="Science Exhibition" 
            className="w-full h-100 object-cover" 
          />
          <p className="legend text-center text-lg mt-2">Science Exhibition</p>
        </div>
        <div>
          <img 
            src="/images/cultural_fest.jpeg" 
            alt="Cultural Fest" 
            className="w-full h-100 object-cover" 
          />
          <p className="legend text-center text-lg mt-2">Cultural Fest</p>
        </div>
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
