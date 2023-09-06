import React from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropertyListing from './Pages/PropertyListing';
import PropertyDetail from './Pages/PropertyDetail'; 


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Property" element={<PropertyListing />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
