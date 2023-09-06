import React from 'react';
import '../Css/sections-one.css'; // CSS file for styling
import aboutImg from '../media/aboutImg.png'
// import VerticalText from './VerticalText';
import { Link } from 'react-router-dom';
import Button from './Button';
// import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import whiteLogo from '../media/whiteLogo.png'



export default function Footer() {
    const sentence = "ABOUT US";
    
    return (
        <div>
            <div className="section-three container-fluid " style={{alignItems: 'center', backgroundColor: '#38021a', display: 'flex'}}>
            <div className="row" style={{width: '90%'}}>
                
                <div className="col-lg-6 col-md-6 col-sm-12  footerCall">
                    <h2>SO, WHAT ARE YOU WAITING FOR? LET’S TALK ABOUT YOUR PROJECT. </h2>

                </div>
                <div className="col-lg-6 col-md-5 col-sm-6" style={{display: 'flex', alignItems: 'center'}}>
                <div style={{width:'60%', marginLeft:'auto', marginRight: 'auto' }}>

                    <Button  
                    disabled={false} 
                    to='/Contact' 
                    className="Button-one col-lg-12 col-md-12 col-sm-6" 
                    style={{ 
                        backgroundColor: '#603548', 
                        color: '#fff',
                        borderRadius: '5px',
                        border: '1px solid #603548',
                        // opacity: '0.2',
                        height: '40px',
                        width: '100%',
                        marginBottom: '10px',
                    }}
                    hoverStyle={{ 
                        backgroundColor: '#fff',
                        color: '#1e1e1e',
                    }}
                    >
                        <p 
                        style={{
                            margin: '0px',
                            fontSize: '71%',
                            padding: '0px 20px',
                            }}>
                                Business Email</p>
                    </Button>

                    <Button  
                    disabled={false} 
                    to='/Contact' 
                    className="Button-one col-lg-12 col-md-12 col-sm-6" 
                    style={{ 
                        backgroundColor: '#eeb400', 
                        color: '#fff',
                        borderRadius: '5px',
                        border: '1px solid #eeb400',
                        height: '40px',
                        width: '100%'
                    }}
                    hoverStyle={{ 
                        backgroundColor: '#fff',
                        color: '#1e1e1e' 
                    }}
                    >
                        <p 
                        style={{
                            margin: '0px',
                            fontSize: '71%',
                            padding: '0px 20px',
                            }}>
                                Contact Us</p>
                    </Button>
                </div>

                </div>
                
            </div>
                            
        </div>
        <div className="section-three container-fluid " style={{alignItems: 'center', backgroundColor: '#38021a', display: 'flex', color:'#fff'}}>
            <div className="row links-footer" style={{width: '90%'}}>
                <div className="col-md-3 col-lg-3 col-sm-12 add-sect">
                    <img src={whiteLogo} alt="Rite Realtors Logo" />
                    <p>1B Olabanji Olajide Crescent, Off Mobolaji Johnson Estate, Lekki Phase 1, Lekki, Lagos</p>
                    <div className="social-media-icons">
                        <a href="https://www.instagram.com/your-instagram-profile">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>


                </div>
                <div className="col-md-8 col-lg-8 col-sm-12" style={{display: 'flex', flexWrap: 'wrap'}}>
                    <div className="col-md-3 col-lg-3 col-sm-6">
                    <h6>COMPANY</h6>
                    <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    {/* <li><a href="#">Profile</a></li> */}
                    {/* <li><a href="#">Our Team</a></li> */}
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Partnerships</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-6">
                    <h6>RESOURCES</h6>
                    <ul className="footer-links">
                    {/* <li><a href="#">News</a></li> */}
                    {/* <li><a href="#">FAQs</a></li> */}
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Newsletter</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-6">
                    <h6>LEGAL</h6>
                    <ul className="footer-links">
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy </a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-6">
                    <h6>CONTACT US</h6>
                    <ul className="footer-links">
                    <li><a href="#">Email address</a></li>
                    <li><a href="#">Phone number</a></li>
                    {/* <li><a href="#">Office Address</a></li> */}
                    {/* <li><a href="#">Socials</a></li> */}
                    </ul>
                    </div>
                    </div>
                </div>
                                
        </div>
    </div>
    );
  }
