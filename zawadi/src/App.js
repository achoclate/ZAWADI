import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"; 

const App = () => {
  return (
    <Router>
      
      <Navbar /> 
      
      <div className="pt-14 ">

        <div className=" bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] min-h-screen">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />{" "}
            {/* Add route for Login */}
          </Routes>
          <Sidebar />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
