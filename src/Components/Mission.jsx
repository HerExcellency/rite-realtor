import React from 'react';
import '../Css/sections-one.css'; // CSS file for styling
import about1 from '../media/about1.png'
import VerticalTextB from './VerticalTextB';
// import { Link } from 'react-router-dom';



export default function Mission() {
    const sentence = "Our Mission";
    
    return (
        <div className="section-three container-fluid ">
            <div className="row" style={{width:'90%',alignItems: 'center', backgroundColor: '#eaeaea', padding:'30px 22px', borderRadius: '40px', display: 'flex'}}>
                <div className="col-lg-4 col-md-4 col-sm-12 shortletImg">
                    <img src={about1} alt='Shortlet images' />
                </div>
                
                <div className="col-lg-6 col-md-6 col-sm-12  shortletCopy">
                    <p>To be Nigeria’s leading and most reputable real estate company, providing top-notch, cutting edge services and products while significantly advancing the value of our clients’, customers’ and investor’s investment. 
                        </p>

                </div>
                
                <div className="col-lg-1 col-md-1 col-sm-12"  >
                    <VerticalTextB text={sentence} style={{backgroundColor: 'Brown'}}/>
                </div> 
                
                
            </div>                
        </div>
    );
  }
