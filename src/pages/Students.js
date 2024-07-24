import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Students</h1>
      <p className="text-lg text-gray-700 mb-4">
        Information about student life, including extracurricular activities, clubs, and societies:
      </p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Extracurricular Activities and Clubs:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</li>
          <li>Literary Society, Environmental Club, Astronomy Club, Coding Club</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Achievements:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student Council:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>
    </div>
  );
};

export default Students;
