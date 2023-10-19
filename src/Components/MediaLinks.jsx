import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../Css/medialinks.css'

const MediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      
      <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default MediaLinks;
