import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <video width="100%" height="auto" autoPlay loop muted>
        <source src={require('../image/video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="pt-15 pb-10 px-4"> {/* Adjusted padding */}
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mt-4cm text-center">View Our Stores</h2> {/* Adjusted heading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="/store/ridgeways-mall">Ridgeways Mall</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/store/14-riverside">14 Riverside</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/store/lavington-mall">Lavington Mall</Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700"> XYZ Plaza</p>
                  <p className="text-sm text-gray-500">123 Main Street, Nairobi, Kenya</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Contact Information</p>
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
