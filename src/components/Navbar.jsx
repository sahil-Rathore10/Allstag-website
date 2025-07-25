import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import 'remixicon/fonts/remixicon.css';
import '../index.css';
import gsap from 'gsap';
import { useCart } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef(null);
  const { cart } = useCart();
  const navigate = useNavigate();

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
        <h2 onClick={() => navigate('/')}>Home</h2>
        <h2 onClick={() => navigate('/products')}>Collection</h2>
        <h2>Special Prices</h2>
        <h2>Track Your Order</h2>
        <h2 onClick={() => navigate('/contact')}>Contact Us</h2>
      </div>
      <div className="right-cart-login">
        <i className="ri-search-2-line" style={{ fontSize: '18px', color: '#F1E99D' }}></i>
        <i className="ri-user-line" style={{ fontSize: '18px', color: '#F1E99D' }} onClick={() => navigate('/login')}></i>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <i
            className="ri-shopping-bag-line"
            style={{ fontSize: '18px', color: '#F1E99D', cursor: 'pointer' }}
            onClick={() => navigate('/checkout')}
          ></i>
          {cart.length > 0 && (
            <span style={{
              position: 'absolute',
              top: -7,
              right: -7,
              background: '#faeb64',
              color: '#13263a',
              borderRadius: '50%',
              fontSize: 12,
              fontWeight: 700,
              padding: '2px 6px',
              minWidth: 18,
              textAlign: 'center',
              boxShadow: '0 2px 8px #faeb64'
            }}>{cart.length}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
