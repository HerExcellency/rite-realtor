import React from 'react';
import '../Css/sections-one.css'; // CSS file for styling
import shortlet2 from '../media/shortlet2.png'

export default function Estate() {
    
    
    return (
        <div className="section-three container-fluid">
            <div className="row estatey" style={{width:'90%', alignItems: 'center'}}>
                
                <div className="col-lg-6 col-md-6 col-sm-12  shortletCopy">
                    <h4>Experience Seamless Project Management and Real Estate Development</h4>
                    <p>With our expertise in project management, we ensure your real estate ventures are executed seamlessly from start to finish. Our experienced team will guide you through the entire process, from initial planning and design to construction and final delivery.

                    Unlock the potential of your property with our professional real estate development services. We specialize in turning ideas into profitable ventures by leveraging our industry knowledge, market insights, and innovative strategies.</p>

                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 shortletImg">
                    <img src={shortlet2} alt='Shortlet images' />
                </div>
            </div>                
        </div>
    );
  }
