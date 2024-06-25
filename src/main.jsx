import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cloud from './pages/Cloud'
import Events from './pages/Events'
import { CartProvider } from './components/CartContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cloud" element={<Cloud />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
