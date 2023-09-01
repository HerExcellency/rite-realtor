import React from "react";
import Navbar from "../Components/Navbar";
import '../Css/Property.css';
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import properties from '../Data/PropertiesData'; // Import properties from the separate file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faBath, faBed } from '@fortawesome/free-solid-svg-icons';



const PropertyListing = () => {
  return (

   
    <>
        <Navbar />
        <div className="container property-body">
          <div>
            <h3>Property Listing</h3>
          </div>
        <div className="property-list">
          
          {properties.map(property => (
            <div className="col-lg-4 col-md-4 col-sm-6 property-outer-card">
              <div className="property-card">
                <div className="headTag">
                  <h5>{property.title}</h5>
                  <div class="discount-label yellow"> <span>For Sale</span> </div>
                </div>
                <Link to={`/property/${property.id}`} key={property.id} >
                <img src={property.imageUrl} alt={property.title} />
                <p>{property.location}</p>
                <div className='parameters'>
                  <span><FontAwesomeIcon icon={faBed} />  {property.bedroom}  bedrooms</span>

                  <span><FontAwesomeIcon icon={faBath} />  {property.bathroom}  bathrooms</span>
                  <span><FontAwesomeIcon icon={faHouse} />  {property.squareMeter}  </span>
                </div>
                <b><p className="price"> ₦‎{property.price} <spam>See more</spam></p></b>
                </Link>
              </div>
            </div>
        ))}
         
        </div>
        </div>
        
        <Footer />
    </>
  );
};

export default PropertyListing;