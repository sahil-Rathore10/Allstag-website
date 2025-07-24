import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can integrate EmailJS or backend API here
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Information</h2>
      <p className="contact-text">
        <strong>All Stag</strong> is a growing clothing brand. It is a one-stop destination for budget-friendly and fine-quality clothes.
        Our ultimate goal is to make the highest-quality clothes possible and to sell them to you at the most competitive and best prices possible.
      </p>

      <p className="contact-text">
        We try our best to provide you with maximum information about products with the help of high-resolution pictures, different size charts, their composition, etc.
      </p>

      <p className="contact-text">
        We will be coming with lots of varieties and designs really soon, and we will be more than happy if you suggest ideas and send them to:
      </p>

      <div className="contact-info">
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/917777019901" target="_blank" rel="noopener noreferrer">+91 7777019901</a></p>
        <p><strong>Email:</strong> <a href="mailto:help.allstag@gmail.com">help.allstag@gmail.com</a></p>
      </div>

      <h2 className="contact-heading">Contact Us Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
