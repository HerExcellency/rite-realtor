import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import properties from '../Data/PropertiesData';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import '../Css/Property.css';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import {faBed} from '@fortawesome/free-solid-svg-icons';
import {faBath} from '@fortawesome/free-solid-svg-icons';

import PropertyCarousel from '../Components/PropertyCarousel';
import InspectionForm from '../Components/InspectionForm';


const PropertyDetail = () => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };
  const { id } = useParams();
  console.log(id);
  const property = properties.find(prop => prop.id === parseInt(id));

  if (!property) {
    return <div>Property not found.</div>;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500
  };

  return (
    <div className="propertiesDetails">
      <Navbar />
      <div className="BoxIn">
        <div className="property-detail">
          <div className="propertyHead">
            <h4>{property.title}</h4>
            <h5><b>₦{property.price}</b></h5>
          </div>
          <div className="locationImg">
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: '4px', color: 'orange'}} />
            <p>{property.location}</p>
          </div>

          <div>
            
            <PropertyCarousel images={property.images} />
            
          </div>
          <div className="propertyDescription propertyCardGen">
            <h5>
              Description
            </h5>
            <p>{property.description}</p>
          </div>

          <div className="factsFeatures propertyCardGen">
            <h5>
            Facts and features
            </h5>
            <div className="cardLay">
              <div className="col-6 col-lg-3 col-md-3 col-sm-6 figuresF">
                <FontAwesomeIcon icon={faHouseChimney} style={{marginRight: '10%', color: 'grey'}}/>
                
                <div>
                  <h6>Type</h6>
                  <p>{property.House}</p>
                  
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-3 col-sm-6 figuresF">
                <FontAwesomeIcon icon={faBed} style={{marginRight: '10%', color: 'grey'}}/>
                
                <div>
                  <h6>Bedrooms</h6>
                  <p>{property.bedroom}</p>
                  
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-3 col-sm-6 figuresF">
                <FontAwesomeIcon icon={faBath} style={{marginRight: '10%', color: 'grey'}}/>
                
                <div>
                  <h6>Bathrooms</h6>
                  <p>{property.bathroom}</p>
                  
                </div>
              </div>
            </div>

          </div>
          <div className="amenities propertyCardGen">
            <h5>
              Amenities
            </h5>
            <ul>
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          <div className="mapLocation propertyCardGen">
            <h5>
              Location Map
            </h5>
            <div className="mapHolder">
            
            </div>
          </div>
          <div className="formInspection">
            <InspectionForm />
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default PropertyDetail;
