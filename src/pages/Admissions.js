import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Admissions</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Admission Process and Criteria:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Admission forms are available for download. Submit the completed form along with required documents at the school office.</li>
          <li>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Dates:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
