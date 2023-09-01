import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Css/sections-one.css'; // CSS file for styling
import Button from "../Components/Button";

export default function LandingSect() {
  
    
    return (
        <div className="section-one">
            <div className='spanOne'>
                <span style={{color: 'white', fontWeight: '800'}}>BUILD</span>
                <span style={{color: '#EEB400', fontWeight: '600'}}> YOUR DREAM<br/>WITH NEW <br/></span>
                <span style={{color: 'white', fontWeight: '800'}}>EXPERIENCES</span><br/>
                <Button  
                disabled={false} 
                to='/Contact' 
                className="Button-one" 
                style={{ 
                    backgroundColor: '#eeb400', 
                    color: '#fff',
                    borderRadius: '5px',
                    border: '1px solid #eeb400'
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
    );
  }
