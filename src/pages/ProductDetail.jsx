import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
import { useCart } from '../context/ProductContext';

const summerProducts = [
  { image: img1, name: 'Emotion Black Oversized T-shirt', price: 799, sizes: ['S', 'M', 'L', 'XL'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
  { image: img2, name: 'Money Never Cheats T-shirt', price: 899, sizes: ['M', 'L', 'XL'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
  { image: img3, name: 'Limitless Oversized T-shirt', price: 749, sizes: ['S', 'M', 'L'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
  { image: img4, name: 'Original Character Black Oversized T-shirt', price: 999, sizes: ['M', 'L', 'XL', 'XXL'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
  { image: img5, name: 'Giraffe Oversized T-shirt', price: 849, sizes: ['S', 'M', 'L', 'XL'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
  { image: img6, name: 'Chillin Oversized T-shirt', price: 799, sizes: ['M', 'L'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
  { image: img7, name: 'At The Top Tank', price: 899, sizes: ['S', 'M', 'L', 'XL', 'XXL'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
  { image: img8, name: 'Acid Wash Vintage Grey Oversized T-shirt', price: 749, sizes: ['S', 'M', 'L'], description: 'This vibrant Sunset Tee captures the warm tones of the evening sky. Made from 100% premium cotton, it ensures all-day comfort and a stylish look.' },
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
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = summerProducts[id];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [showDescription, setShowDescription] = useState(false);


  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail-page" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, #0D1A29, #173A53, #09548a)', position: 'relative', }}>
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          background: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          color: '#faeb64',
          cursor: 'pointer'
        }}
        aria-label="Go Back"
      >
        ←
      </button>

      <div className="product-detail-card" style={{ background: '#13263a', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(13,26,41,0.13)', padding: '2.5rem', maxWidth: 600, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={product.image} alt={product.name} style={{ width: '260px', height: '260px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.5rem' }} />
        <h2 style={{ color: '#faeb64', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>{product.name}</h2>
        <div style={{ color: '#f1e99d', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Price: <b>₹{product.price}</b></div>
        <div style={{ marginBottom: '1.2rem', width: '100%' }}>
          <div style={{ color: '#f1e99d', marginBottom: '0.5rem' }}>Select Size:</div>
          <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  background: selectedSize === size ? '#faeb64' : '#f1e99d',
                  color: selectedSize === size ? '#13263a' : '#173A53',
                  border: 'none',
                  borderRadius: '0.7rem',
                  padding: '0.4rem 1.2rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: selectedSize === size ? '0 2px 8px #faeb64' : '0 2px 8px rgba(13,26,41,0.08)'
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: '1.2rem', width: '100%' }}>
          <div style={{ color: '#f1e99d', marginBottom: '0.5rem' }}>Quantity:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ fontSize: '1.2rem', padding: '0.2rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#faeb64', color: '#13263a', fontWeight: 700, cursor: 'pointer' }}>-</button>
            <span style={{ color: '#faeb64', fontSize: '1.2rem', minWidth: 32, textAlign: 'center' }}>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} style={{ fontSize: '1.2rem', padding: '0.2rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#faeb64', color: '#13263a', fontWeight: 700, cursor: 'pointer' }}>+</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
          <button
            style={{ background: '#faeb64', color: '#13263a', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: '0.7rem', padding: '0.7rem 2.2rem', cursor: 'pointer', boxShadow: '0 2px 8px #faeb64' }}
            onClick={() => {
              addToCart({
                id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: selectedSize,
                quantity
              });
              // alert('Added to cart!');
              toast.success("Added to cart!");
            }}
          >
            Add to Cart
          </button>
          <button style={{ background: '#173A53', color: '#f1e99d', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: '0.7rem', padding: '0.7rem 2.2rem', cursor: 'pointer', boxShadow: '0 2px 8px #173A53' }}>Buy Now</button>
        </div>
        {/* description toggle */}
        <div style={{ marginTop: '2rem', width: '100%', textAlign: 'center' }}>
          <button
            onClick={() => setShowDescription(prev => !prev)}
            style={{
              background: 'none',
              border: 'none',
              color: '#faeb64',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
              textDecoration: 'underline'
            }}
          >
            {showDescription ? 'Hide Description ▲' : 'Show Description ▼'}
          </button>

          {showDescription && (
            <p style={{ marginTop: '1rem', color: '#f1e99d', lineHeight: 1.6, textAlign: 'left' }}>
              {product.description}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;