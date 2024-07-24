import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Academics</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Curriculum:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</li>
          <li>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
          <li>Senior Secondary (Grades 11-12):</li>
          <ul className="list-disc pl-10 mt-2 space-y-2">
            <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
            <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
          </ul>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Teaching Methodologies:</h2>
        <p className="text-gray-700">
          We use a blend of traditional and modern teaching techniques to cater to different learning styles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Educational Resources:</h2>
        <p className="text-gray-700">
          Digital classrooms, interactive learning modules, and access to online educational platforms.
        </p>
      </section>
    </div>
  );
};

export default Academics;
