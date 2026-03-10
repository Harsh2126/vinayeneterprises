import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Vinay Enterprises</h4>
            <p>Your trusted partner in solar energy solutions. Quality products, expert installation, and reliable service.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#systems">Systems</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <a href="#products">Solar Panels</a>
            <a href="#products">Inverters</a>
            <a href="#products">Batteries</a>
            <a href="#systems">Solar Systems</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📞 +91 9451317257</p>
            <p>✉️ vinayenterprises2126@gmail.com</p>
            <p>📍 Orai, Jalaun - 285001</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vinay Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
