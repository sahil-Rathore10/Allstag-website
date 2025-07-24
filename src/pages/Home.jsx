import React, { useRef, useEffect } from 'react';
import './Home.css';
import hero from '../assets/hero.jpg';
import gsap from 'gsap';
import ProductCard from '../components/ProductCard';
import img1 from '../assets/t1.png';
import img2 from '../assets/t7.jpg';
import img3 from '../assets/t5.png';
import img4 from '../assets/t2.png';
import img5 from '../assets/t3.png';
import img6 from '../assets/t4.png';
import img7 from '../assets/t6.jpg';
import img8 from '../assets/t8.jpg';

const summerProducts = [
  { image: img1, name: 'Sunset Tee', price: 799, sizes: ['S', 'M', 'L', 'XL'] },
  { image: img2, name: 'Ocean Blue', price: 899, sizes: ['M', 'L', 'XL'] },
  { image: img3, name: 'Palm Vibes', price: 749, sizes: ['S', 'M', 'L'] },
  { image: img4, name: 'Tropic White', price: 999, sizes: ['M', 'L', 'XL', 'XXL'] },
  { image: img5, name: 'Coral Pink', price: 849, sizes: ['S', 'M', 'L', 'XL'] },
  { image: img6, name: 'Mint Fresh', price: 799, sizes: ['M', 'L'] },
  { image: img7, name: 'Summer Black', price: 899, sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { image: img8, name: 'Citrus Pop', price: 749, sizes: ['S', 'M', 'L'] },
];

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
    <div>
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
    <div className="summer-collection">
      <h2 className="summer-heading">Exclusive Summer Collection</h2>
      <div className="summer-grid">
        {summerProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} id={idx} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;