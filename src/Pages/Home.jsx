import React from "react";
import Navbar from "../Components/Navbar";
import LandingSect from "../Components/LandingSect";
import ServiceSect from "../Components/ServiceSect";
import Shortlet from "../Components/Shortlet"
import Estate from "../Components/Estate";
// import AutoScrollCarousel from "../Components/AutoScrollCarousel";
import '../Css/sections-one.css';
// import Carouselsect from "../Components/Carouselsect";
import AboutCard from "../Components/AboutCard";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";





function Home() {

    return (
    
        <> 
            <Navbar />  
            <LandingSect />
            <ServiceSect />
            <Shortlet />
            <Estate />
            <Gallery />
            <AboutCard />
            <Footer />
            
        </>
    )

}
export default Home;