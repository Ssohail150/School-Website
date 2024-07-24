import React from 'react';
import Carousel from '../components/Carousel';
import logo from '../assets/logo.png'; // Updated import path

const Home = () => {
  return (
    <div>
      <div className="text-center my-12">
        <img src={logo} alt="School Logo" className="mx-auto w-48 h-auto md:w-64 lg:w-80 xl:w-96" />
      </div>
      <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Welcome to Springdale Public School</h1>
      <Carousel />
      <div className="container mx-auto mt-12 px-4">
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-700 mb-4">
            At Springdale Public School, we are committed to providing an excellent education to our students. Our dedicated faculty, state-of-the-art facilities, and supportive community work together to create an enriching learning environment.
          </p>
          <a href="/about-us" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Academics</h2>
          <p className="text-gray-700 mb-4">
            Our academic programs are designed to challenge and inspire students. From early childhood education to advanced courses, we offer a comprehensive curriculum that prepares students for future success.
          </p>
          <a href="/academics" className="text-blue-500 hover:text-blue-700 font-semibold">Explore Our Programs</a>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Admissions</h2>
          <p className="text-gray-700 mb-4">
            Interested in joining Springdale Public School? Our admissions process is straightforward and welcoming. Discover how you can become part of our vibrant school community.
          </p>
          <a href="/admissions" className="text-blue-500 hover:text-blue-700 font-semibold">Apply Now</a>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Faculty</h2>
          <p className="text-gray-700 mb-4">
            Meet our exceptional faculty members who are dedicated to fostering a positive and dynamic learning environment. Their expertise and passion drive the success of our students.
          </p>
          <a href="/faculty" className="text-blue-500 hover:text-blue-700 font-semibold">Meet Our Team</a>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Students</h2>
          <p className="text-gray-700 mb-4">
            Our students are the heart of Springdale Public School. We offer various programs and extracurricular activities to ensure their holistic development and prepare them for a bright future.
          </p>
          <a href="/students" className="text-blue-500 hover:text-blue-700 font-semibold">See Student Life</a>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Gallery</h2>
          <p className="text-gray-700 mb-4">
            Explore our gallery to see the vibrant and engaging activities happening at Springdale Public School. From events to classroom moments, our gallery captures the essence of our school community.
          </p>
          <a href="/gallery" className="text-blue-500 hover:text-blue-700 font-semibold">View Gallery</a>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or need more information? Feel free to reach out to us. We are here to assist you with any inquiries you may have about our school.
          </p>
          <a href="/contact-us" className="text-blue-500 hover:text-blue-700 font-semibold">Get in Touch</a>
        </section>
      </div>
    </div>
  );
};

export default Home;
