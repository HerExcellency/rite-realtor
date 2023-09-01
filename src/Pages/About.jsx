import React from "react";
import Navbar from "../Components/Navbar";
// import LandingSect from "../Components/LandingSect";
// import ServiceSect from "../Components/ServiceSect";
// import Shortlet from "../Components/Shortlet"
// import Estate from "../Components/Estate";
// import AutoScrollCarousel from "../Components/AutoScrollCarousel";
import '../Css/sections-one.css';
// import Carouselsect from "../Components/Carouselsect";
import AboutCardWhite from "../Components/AboutCardWhite";
import Mission from "../Components/Mission";
import Footer from "../Components/Footer";
// import Gallery from "../Components/Gallery";





function Home() {

    return (
    
        <> 
            <Navbar />  
        
            <div>
                
                <AboutCardWhite />
                <Mission />
                <Footer />
            </div>
            
        </>
    )

}
export default Home;