import React from 'react';
import '../Css/sections-one.css'; // CSS file for styling
import VerticalText from "../Components/VerticalText";
import bestPrice from "../media/icon/bestPrice.png";
import construction from "../media/icon/construction.png";
import consulting from "../media/icon/consulting.png";
import highQuality from "../media/icon/highQuality.png";



export default function ServiceSect() {
    const sentence = "WHAT WE OFFER";

    const images = [
        {
          src: bestPrice,
          alt: "Image 1",
          caption: "The  Best Price",
          content: "We understand the value of your hard-earned money and are committed to offering you the most competitive prices on the market.",
        },
        {
          src: construction,
          alt: "Image 2",
          caption: "Consultant",
          content: "you gain access to a team of seasoned professionals who are dedicated to helping you navigate the complexities of business and life.",
        },
        {
          src: consulting,
          alt: "Image 3",
          caption: "Custom Designs",
          content: "With our collaborative approach, we work closely with you to understand your preferences, inspirations, and desired outcomes.",
        },
        {
            src: highQuality,
            alt: "Image 3",
            caption: "Premuim Quality",
            content: "Exceptional craftsmanship and unparalleled attention to detail redefine your expectations.",
          },
      ];
    
    return (
        <div className="section-two container-fluid">
            <div className="HouseDiv2">
                <VerticalText text={sentence} />
                <div className="servDiv1">
                    <div className="servDiv2">
                    {/* <div className="col-sm-12 col-md-6 col-lg-6"> */}
                        {images.map((image) => (
                            <div key={image.src} className="col-sm-12 col-md-6 col-lg-6 servServ">
                                <div className='singlely'>
                                        <img src={image.src} alt={image.alt} />
                                    <div className='singler'>
                                        <h4>{image.caption}</h4>
                                        <p>{image.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {/* </div> */}

                    </div>
                </div>
            </div>
            
            

        </div>
    );
  }
