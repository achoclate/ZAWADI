import React from 'react';
import { Link } from 'react-router-dom';
import myhero from '../image/myhero.jpg'; // Adjust the path as needed
import womanphu from '../image/womanphu.jpg'; // Replace with the actual path to your image

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="w-full h-screen relative flex items-center justify-center">
        {/* Background Hero Image */}
        <img
          src={myhero}
          alt="Hero"
          className="absolute w-full h-full object-cover"
        />

        {/* Content with Overlay */}
        <div className="relative z-10 flex items-center justify-between w-full h-full bg-black bg-opacity-50 px-10">
          {/* Left-Side Image */}
          <div className="w-1/2 h-19 ">
            <img
              src={womanphu}
              alt="Feature"
              // 
              className="w-full h-screen relative flex items-center justify-center"
            />
          </div>

          {/* Right-Side Content */}
          <div className="w-1/2 text-white flex flex-col items-center justify-center text-center space-y-6">
            
            <Link
              to="/shop"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* View Our Stores Section */}
      <section className="pt-15 pb-10 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">View Our Stores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Locations */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
                <ul>
                  <li className="mb-2">
                    <Link
                      to="/store/ridgeways-mall"
                      className="text-blue-500 hover:underline"
                    >
                      Ridgeways Mall
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/store/14-riverside"
                      className="text-blue-500 hover:underline"
                    >
                      14 Riverside
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/store/lavington-mall"
                      className="text-blue-500 hover:underline"
                    >
                      Lavington Mall
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">XYZ Plaza</p>
                  <p className="text-sm text-gray-500">123 Main Street, Nairobi, Kenya</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Contact Us</p>
                  <p className="text-sm text-gray-500">Phone: +254700000000</p>
                  <p className="text-sm text-gray-500">Email: zawadi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
