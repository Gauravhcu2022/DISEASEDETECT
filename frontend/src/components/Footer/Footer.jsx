import React from 'react';
import './Footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>KISAN ORGANICS</p>
      </div>
      <ul className="footer-links">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icons">
        <YouTubeIcon className="icon" />
        <FacebookIcon className="icon" />
        <InstagramIcon className="icon" />
        <PlaceIcon className="icon" />
      </div>
      <div className="footer-copyright">
        <hr />
        <p>&copy; 2023 KISAN ORGANICS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
