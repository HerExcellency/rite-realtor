import React from 'react';
import '../Css/sections-one.css'; // CSS file for styling
import shortlet from '../media/shortlet1.png'

export default function Shortlet() {
    
    
    return (
        <div className="section-three container-fluid">
            <div className="row" style={{width:'90%',alignItems: 'center'}}>
                <div className="col-lg-6 col-md-6 col-sm-12 shortletImg">
                    <img src={shortlet} alt='Shortlet images' />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12  shortletCopy">
                    <h4>Discover Shortlet Services and Professional Facility Management</h4>
                    <p>Planning a short-term stay? Look no further! Our Shortlet Services provide the perfect solution for those seeking a temporary home away from home. Whether you're a business traveler, relocating individual, or simply exploring new destinations, our curated selection of short-term rental properties will exceed your expectations.

                    Maximize the potential of your property investment with our comprehensive Facility Management services. We understand that managing a property can be demanding and time-consuming.</p>

                </div>
            </div>                
        </div>
    );
  }
