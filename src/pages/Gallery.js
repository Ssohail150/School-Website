import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative group">
          <img src="/images/sports_day.jpeg" alt="Sports Day" className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-3 rounded-t-lg text-sm w-full text-center">Sports Day</p>
        </div>
        <div className="relative group">
          <img src="/images/science_exhibition.jpeg" alt="Science Exhibition" className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-3 rounded-t-lg text-sm w-full text-center">Science Exhibition</p>
        </div>
        <div className="relative group">
          <img src="/images/cultural_fest.jpeg" alt="Cultural Fest" className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-3 rounded-t-lg text-sm w-full text-center">Cultural Fest</p>
        </div>
        <div className="relative group">
          <img src="/images/classroom.jpeg" alt="Classroom" className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-3 rounded-t-lg text-sm w-full text-center">Classroom</p>
        </div>
        <div className="relative group">
          <img src="/images/library.jpeg" alt="Library" className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-3 rounded-t-lg text-sm w-full text-center">Library</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
