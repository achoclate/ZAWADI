import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input type="text" id="name" name="name" className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"></textarea>
                </div>
                <button type="submit" className="bg-pink-800 text-white py-2 px-6 rounded-md hover:bg-indigo-300 transition duration-300">Send Message</button>
              </form>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
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
  );
};

export default Contact;
