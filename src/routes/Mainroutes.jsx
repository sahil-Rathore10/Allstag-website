// src/routes/MainRoutes.jsx
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import AddProduct from '../pages/AddProduct';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
