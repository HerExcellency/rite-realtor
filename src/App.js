import React from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropertyListing from './Pages/PropertyListing';
import PropertyDetail from './Pages/PropertyDetail';
// library.add(faTag, faBath);



function App() {
  
  return (
    <div className="">
      <BrowserRouter>
        <Routes>   
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route path="/" exact component={PropertyListing} />
          <Route path="/property/:id" render={(props) => <PropertyDetail {...props} properties={properties} />} /> */}
          {/* <Route path="/" exact> <PropertyListing properties={properties} /></Route>
          <Route path="/property/:id"><PropertyDetail properties={properties} /></Route> */}
          {/* <Route path="/Property" exact component={PropertyListing} />
          <Route path="/property/:id" component={PropertyDetail} /> */}
          <Route exact path="/Property" element={<PropertyListing />} />
          <Route path="/Property/:id" component={<PropertyDetail />} /> 
       </Routes>      
       
      </BrowserRouter>
    </div>
  );
}
  
export default App;