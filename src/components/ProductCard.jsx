import React, { useState } from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, name, price, sizes, id }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className={`product-card${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        {hovered && (
          <div className="size-overlay">
            <div className="size-title">Available Sizes</div>
            <div className="sizes-list">
              {sizes.map((size) => (
                <span className="size-badge" key={size}>{size}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">₹{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
