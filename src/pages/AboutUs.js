import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong className="font-semibold">Vision:</strong> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong className="font-semibold">Mission:</strong> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong className="font-semibold">Principal's Message:</strong> At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Infrastructure and Facilities:</h2>
        <ul className="list-disc list-inside pl-5 text-gray-700 space-y-2">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
