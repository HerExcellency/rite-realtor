import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'; // CSS file for styling

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
      <nav className="navigation container-fluid">
        
        <button 
        className="hamburger"
        onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
        //   className="navigation-menu"
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
          >
          <ul>
            <li className="navRoute">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/property">Property</a>
            </li>
            <a href="/" className="brand-name">
                <img src="https://res.cloudinary.com/do7qijyed/image/upload/v1687867169/rite-realtors/Mask_group_zgb54u.png" alt="realtor logo" />
            </a>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
