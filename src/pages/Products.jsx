import React, { useState } from 'react';
import './Products.css';
import ProductCard from '../components/ProductCard';

// 🖼 Importing images
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

// 🧾 Initial product data
const productList = [
  { id: 1, name: 'Casual Tee', image: img1, price: 799, sizes: ['S', 'M', 'L'], bestSeller: true },
  { id: 2, name: 'Classic Shirt', image: s1, price: 1399, sizes: ['M', 'L'], bestSeller: false },
  { id: 3, name: 'Polo Tee', image: s9, price: 1199, sizes: ['S', 'M'], bestSeller: true },
  { id: 4, name: 'Urban Shirt', image: s4, price: 1299, sizes: ['L', 'XL'], bestSeller: false },
  { id: 5, name: 'Chill Tee', image: img3, price: 599, sizes: ['M', 'L', 'XL'], bestSeller: true },
  { id: 6, name: 'Printed Shirt', image: s5, price: 1499, sizes: ['M', 'L'], bestSeller: false },
  // Add more products as needed
];

const Products = () => {
  const [products, setProducts] = useState(productList);

  const handleSort = (type) => {
    let sorted = [...products];
    switch (type) {
      case 'bestSeller':
        sorted = productList.filter(p => p.bestSeller);
        break;
      case 'alpha':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'lowToHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = [...productList];
    }
    setProducts(sorted);
  };

  return (
    <div className="products-container">
      <div className="filter-sidebar">
        <h2>Filters</h2>
        <button onClick={() => handleSort('bestSeller')}>Best Sellers</button>
        <button onClick={() => handleSort('alpha')}>Alphabetical Order</button>
        <button onClick={() => handleSort('lowToHigh')}>Price: Low to High</button>
        <button onClick={() => handleSort('highToLow')}>Price: High to Low</button>
        <button onClick={() => handleSort('reset')}>Reset</button>
      </div>

      <div className="product-cards-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            sizes={item.sizes}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
