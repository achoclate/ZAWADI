import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './context/ProductContext';
import SidebarProvider from './context/SidebarContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
  </SidebarProvider>
);