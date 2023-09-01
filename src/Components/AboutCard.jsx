import React from 'react';
import '../Css/sections-one.css'; // CSS file for styling
import aboutImg from '../media/aboutImg.png'
import VerticalText from './VerticalText';
import { Link } from 'react-router-dom';



export default function AboutCard() {
    const sentence = "ABOUT US";
    
    return (
        <div className="section-three container-fluid ">
            <div className="row" style={{width:'90%',alignItems: 'center', backgroundColor: '#eeb840', padding:'15px 22px', borderRadius: '40px', display: 'flex'}}>
                
                <div className="col-lg-1 col-md-1 col-sm-12"  >
                    <VerticalText text={sentence} style={{backgroundColor: 'Brown'}}/>
                </div> 
                <div className="col-lg-6 col-md-6 col-sm-12  shortletCopy">
                    {/* <h4>Discover Shortlet Services and Professional Facility Management</h4> */}
                    <p>Riterealtors Limited is a real estate development firm that provides bespoke solutions across a range of real estate services to owners, occupiers and investors in Nigeria. Our scope of business span across real estate, construction, facility management, and luxury short let services across Nigeria. <Link to="/"><b>See More</b></Link></p>

                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 shortletImg">
                    <img src={aboutImg} alt='Shortlet images' />
                </div>
                
            </div>                
        </div>
    );
  }
