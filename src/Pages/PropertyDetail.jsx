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


const PropertyDetail = () => {
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
    <div>
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
          {/* <img src={property.imageUrl} alt={property.title} />
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Price: ₦{property.price}</p> */}
          <div className="slider-wrapper">

          <Slider {...settings}>
            
          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
              <label className="slick-slide-label">{slide.label}</label>
            </div>

            )}
          </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default PropertyDetail;
