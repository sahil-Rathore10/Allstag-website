import React, { useRef, useEffect } from 'react';
import './Home.css';
import hero from '../assets/hero.jpg';
import { useNavigate } from 'react-router-dom';
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

import s1 from '../assets/shirt1.jpg';
import s2 from '../assets/shirt6.jpg';
import s3 from '../assets/shirt3.jpg';
import s4 from '../assets/shirt4.jpg';
import s5 from '../assets/shirt5.jpg';
import s6 from '../assets/shirt2.jpg';
import s7 from '../assets/shirt7.jpg';
import s8 from '../assets/shirt8.jpg';
import s9 from '../assets/polo.jpg';

import neww from "../assets/newArrival.mp4"
import arush from "../assets/AarushHero.mp4";
import left from "../assets/shirtreel.mp4"
import right from "../assets/newCollection.mp4"
import Contact from './Contact';


const summerProducts = [
  { image: img1, name: 'Emotion Black Oversized T-shirt', price: 799, sizes: ['S', 'M', 'L', 'XL'] },
  { image: img2, name: 'Money Never Cheats T-shirt', price: 899, sizes: ['M', 'L', 'XL'] },
  { image: img3, name: 'Limitless Oversized T-shirt', price: 749, sizes: ['S', 'M', 'L'] },
  { image: img4, name: 'Original Character Black Oversized T-shirt', price: 999, sizes: ['M', 'L', 'XL', 'XXL'] },
  { image: img5, name: 'Giraffe Oversized T-shirt', price: 849, sizes: ['S', 'M', 'L', 'XL'] },
  { image: img6, name: 'Chillin Oversized T-shirt', price: 799, sizes: ['M', 'L'] },
  { image: img7, name: 'At The Top Tank', price: 899, sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { image: img8, name: 'Acid Wash Vintage Grey Oversized T-shirt', price: 749, sizes: ['S', 'M', 'L'] },
];
const shirtPoloProducts = [
  { image: s1, name: 'Polo Classic Tee', price: 899, sizes: ['M', 'L'] },
  { image: s2, name: 'Slim Fit Shirt', price: 1199, sizes: ['M', 'L', 'XL'] },
  { image: s3, name: 'Solid Polo', price: 799, sizes: ['S', 'M'] },
  { image: s4, name: 'Casual Denim Shirt', price: 1399, sizes: ['M', 'L', 'XL'] },
  { image: s5, name: 'Polo Activewear', price: 999, sizes: ['S', 'M', 'L'] },
  { image: s6, name: 'Relaxed Collar Shirt', price: 1299, sizes: ['L', 'XL'] },
  { image: s7, name: 'Luxury Polo Tee', price: 1099, sizes: ['S', 'M'] },
  { image: s8, name: 'Lightweight Summer Shirt', price: 1199, sizes: ['M', 'L', 'XL'] },
  { image: s9, name: 'Lightweight Summer Shirt', price: 1199, sizes: ['M', 'L', 'XL'] },
];
const Home = () => {
  const heroImgRef = useRef(null);
  const shopNowBtnRef = useRef(null);
  const heroTextRef = useRef(null);
  const navigate = useNavigate();


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
    <div className='main'>
      <div className="hero-section">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
        >
          <source src={neww} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}

        <div className="hero-text-left" ref={heroTextRef}>
          <h1 className="allstag-headline">
            <i>Discover AllStag: <br />Premium Shirts & T-Shirts <br /> for the Modern You</i>
          </h1>
          <button onClick={() => navigate('/products')} className="shop-now-btn" ref={shopNowBtnRef}>
            Shop<br />Now
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

      <div className="shirt-collection">
        <h2 className="shirt-heading">Shirt | Polo Collection</h2>
        <div className="shirt-slider">
          <div className="slider-track">
            {shirtPoloProducts.concat(shirtPoloProducts).map((product, idx) => (
              <ProductCard key={idx} {...product} id={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h2 className="reviews-heading">What Our Customers Say</h2>
        <div className="reviews-list">
          <p>"Amazing quality and super fast delivery!" – Aakash P.</p>
          <p>"The fit is perfect and fabric feels premium. Will buy again!" – Neha S.</p>
          <p>"Stylish and affordable – a must-have!" – Rohan M.</p>
        </div>

        <div className="video-showcase">
          <video
            src={neww}
            autoPlay
            loop
            muted
            className="main-video"
          />

          <video
            src={left}
            autoPlay
            loop
            muted
            className="side-video left-video"
          />

          <video
            src={arush}
            autoPlay
            loop
            muted
            className="side-video right-video"
          />

          <button className="view-btn">View</button>
        </div>
      </div>
      <div className="contact-section">
        <Contact />
      </div>



    </div>
  );
};

export default Home;