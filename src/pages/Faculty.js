import React from 'react';

const Faculty = () => {
  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Faculty</h1>
      <p className="text-lg text-gray-700 mb-4">Profiles of the teaching and administrative staff:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-4">
        <li>
          <strong className="font-semibold">John Doe:</strong> Principal, M.Ed, 20 years of experience in educational administration.
        </li>
        <li>
          <strong className="font-semibold">Jane Smith:</strong> Vice Principal, M.Sc. in Physics, 15 years of teaching experience.
        </li>
        <li>
          <strong className="font-semibold">Emily Johnson:</strong> English Teacher, M.A. in English, 10 years of teaching experience.
        </li>
        <li>
          <strong className="font-semibold">Michael Brown:</strong> Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.
        </li>
        <li>
          <strong className="font-semibold">Sophia Davis:</strong> Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.
        </li>
        <li>
          <strong className="font-semibold">David Wilson:</strong> Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.
        </li>
      </ul>
    </div>
  );
};

export default Faculty;
