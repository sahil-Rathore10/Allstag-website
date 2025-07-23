import React, { useRef, useEffect } from 'react';
import './Home.css';
import hero from '../assets/hero.jpg';
import gsap from 'gsap';

const Home = () => {
  const heroImgRef = useRef(null);
  const shopNowBtnRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroImgRef.current,
      { x: '100vw', opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Infinite alternate rotation for the button
    gsap.to(shopNowBtnRef.current, {
      rotate: 360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Animate hero-text-left from left
    gsap.fromTo(
      heroTextRef.current,
      { x: '-100vw', opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-text-left" ref={heroTextRef}>
        <h1 className="allstag-headline">
          <i>Discover AllStag: <br/>Premium Shirts & T-Shirts <br/> for the Modern You</i>
        </h1>
        <button className="shop-now-btn" ref={shopNowBtnRef}>
          Shop<br/>Now
        </button>
      </div>
      <div className="hero-img-right" ref={heroImgRef}>
        <img src={hero} alt='hero img' />
      </div>
    </div>
  );
};

export default Home;