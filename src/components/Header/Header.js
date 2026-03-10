import React, { useState } from 'react';
import logo from '../../assets/images/Screenshot_2026-03-10_112945-removebg-preview.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Vinay Enterprises" />
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={menuOpen ? 'active' : ''}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a>
          <a href="#subsidy" onClick={() => setMenuOpen(false)}>Subsidy</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
