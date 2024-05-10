import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login'; // Import the Login component

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header /> {/* Render the Header component first */}
        <Navbar /> {/* Render the Navbar component next */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} /> {/* Add route for Login */}
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
