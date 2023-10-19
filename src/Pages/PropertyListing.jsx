import React from "react";
import Navbar from "../Components/Navbar";
import '../Css/Property.css';
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import properties from '../Data/PropertiesData'; // Import properties from the separate file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import forSale from '../media/forSale.png'

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
            <div className="col-lg-4 col-md-4 col-sm-6 property-outer-card" key={property.id}>
              <div className="property-card">
                <div className="headTag">
                  <div><h5>{property.title}</h5></div>
                  <div className="justit"> <img src={forSale} alt="for Sale icon" /></div>
                </div>
                <Link to={`/property/${property.id}`}>
                  <img src={property.imageUrl} alt={property.title} />
                  <p>{property.location}</p>
                  <div className='parameters'>
                    <span><FontAwesomeIcon icon={faBed} />  {property.bedroom}  bedrooms</span>
                    <span><FontAwesomeIcon icon={faBath} />  {property.bathroom}  bathrooms</span>
                    <span><FontAwesomeIcon icon={faHouse} />  {property.squareMeter}  </span>
                  </div>
                  <p className="price"> ₦{property.price} <span>See more</span></p>
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
