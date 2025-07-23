import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import 'remixicon/fonts/remixicon.css';
import '../index.css';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const navElements = navRef.current.querySelectorAll('div');
    gsap.from(navElements, {
      y: -80,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="nav" ref={navRef}>
      <div className="left-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="center-nav">
        <h2>Collections</h2>
        <h2>Winters</h2>
        <h2>Special Prices</h2>
        <h2>Track Your Order</h2>
        <h2>Contact Us</h2>
      </div>
      <div className="right-cart-login">
        <i className="ri-search-2-line" style={{ fontSize: '18px', color: '#F1E99D' }}></i>
        <i className="ri-user-line" style={{ fontSize: '18px', color: '#F1E99D' }}></i>
        <i className="ri-shopping-bag-line" style={{ fontSize: '18px', color: '#F1E99D' }}></i>
      </div>
    </div>
  );
};

export default Navbar;
