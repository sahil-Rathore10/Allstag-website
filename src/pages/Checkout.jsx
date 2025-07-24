import React from 'react';
import { useCart } from '../context/ProductContext';

const Checkout = () => {
  const { cart, removeFromCart } = useCart();

  const getTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0D1A29, #173A53, #09548a)', padding: '2rem 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', background: '#13263a', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(13,26,41,0.13)', padding: '2rem' }}>
        <h2 style={{ color: '#faeb64', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Your Cart</h2>
        {cart.length === 0 ? (
          <div style={{ color: '#f1e99d', textAlign: 'center', fontSize: '1.2rem' }}>Your cart is empty.</div>
        ) : (
          <>
            <table style={{ width: '100%', color: '#f1e99d', marginBottom: '2rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #faeb64' }}>
                  <th style={{ padding: '0.5rem' }}>Image</th>
                  <th style={{ padding: '0.5rem' }}>Name</th>
                  <th style={{ padding: '0.5rem' }}>Size</th>
                  <th style={{ padding: '0.5rem' }}>Price</th>
                  <th style={{ padding: '0.5rem' }}>Quantity</th>
                  <th style={{ padding: '0.5rem' }}>Total</th>
                  <th style={{ padding: '0.5rem' }}>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #233a53' }}>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}><img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8 }} /></td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{item.name}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{item.size}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>₹{item.price}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{item.quantity}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>₹{item.price * item.quantity}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                      <button onClick={() => removeFromCart(item.id, item.size)} style={{ background: '#faeb64', color: '#13263a', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer', fontWeight: 700 }}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ color: '#faeb64', fontWeight: 700, fontSize: '1.2rem', textAlign: 'right', marginBottom: '2rem' }}>
              Grand Total: ₹{getTotal()}
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#faeb64', marginBottom: '1rem' }}>Payment Method</h3>
              <select style={{ padding: '0.7rem 1.2rem', borderRadius: 8, border: 'none', fontSize: '1rem', fontWeight: 600 }}>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>UPI</option>
                <option>Cash on Delivery</option>
              </select>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button style={{ background: '#faeb64', color: '#13263a', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: '0.7rem', padding: '0.7rem 2.2rem', cursor: 'pointer', boxShadow: '0 2px 8px #faeb64' }}>
                Proceed to Pay
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;