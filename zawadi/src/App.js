import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // Import the Home component
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Navbar /> {/* Place Navbar component right below Header */}
        <Routes>
          <Route path='/' element={<Home/>} /> {/* Use Home component here */}
          <Route path='/Shop' element={<Shop/>} />
          <Route path='Contact' element={< Contact/>} />
          <Route path='login' element={<Login/>} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
