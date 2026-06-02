import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="#contact" className="btn btn-filled">Get Free Quote</a>
            <a href="tel:+919451317257" className="btn btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              Call Us
            </a>
          </div>

          <div className="top-bar-center">
            <div className="brand-text">
              <span className="brand-name">Vinay Enterprises</span>
              <span className="brand-tagline">Clean Energy Solutions</span>
            </div>
          </div>

          <div className="top-bar-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/vinayenterprises_solar?igsh=anM3Ymd6ZTMyeWow" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={link.active ? 'nav-active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Info Strip */}
      <div className="info-strip">
        <div className="container">
          <span>Mon–Sat 9AM–7PM &nbsp;·&nbsp; Sun 10AM–3PM &nbsp;·&nbsp; Premium Solar Installation &amp; Consultancy</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
