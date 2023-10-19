import React from "react";
import Navbar from "../Components/Navbar";
import '../Css/sections-one.css';
import AboutCardWhite from "../Components/AboutCardWhite";
import Mission from "../Components/Mission";
import Footer from "../Components/Footer";





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