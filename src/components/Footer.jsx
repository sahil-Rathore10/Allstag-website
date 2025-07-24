import React from 'react';
import './Footer.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Return & Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Connect With Us</h3>
          <ul>
            <li onClick={() => navigate('/about')}>About Us</li>
            <li onClick={() => navigate('/contact')}>Contact Us</li>
            <li>Track Your Order</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="socials">
          <a href="https://www.instagram.com/allstagapparels/?hl=en" target="_blank" rel="noopener noreferrer"><i class="ri-instagram-line"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="ri-facebook-circle-fill"></i></a>
          <a href="https://www.allstag.com/" target="_blank" rel="noopener noreferrer"><i class="ri-twitter-x-fill"></i></a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} AllStag | Powered by Sahil
        </p>
      </div>
    </footer>
  );
};

export default Footer;
