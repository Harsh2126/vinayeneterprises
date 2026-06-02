import React, { useState, useEffect } from 'react';
import heroImg from '../../assets/images/Screenshot 2026-06-02 181853.png';
import './Hero.css';

const heroImages = [
  { src: heroImg, alt: 'Solar Installation' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHMU5Wb2C-NulsXwFntVz8-PDJtyF6CWrSq9vAPJJLKoUJenkSVCB0VBBBq9v9gl5rKp8bs2HlWk4U8OLaAi5RrcJpKV5ZB_xbxahq9I1iuMmCNZzsk6lW9Fl-Cckm9r7bxQWzlCg=s1360-w1360-h1020-rw', alt: 'Vinay Enterprises Shop' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGvPCAD5ixxu6ukWdp_KStbbQYuJc5BpJ1O-OxOBib2ufkuj8Blil1ykKZCfTLZ6Ws8awvxk-MX2uBtO9ZWe6RnfrcKEmx1cWvpz4jl_qfsfLVJIyXX8jFyNsgNC2NIvmfH1u9BaQ=s1360-w1360-h1020-rw', alt: 'Vinay Enterprises Interior' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* Left Column */}
        <div className="hero-left animate">
          <div className="hero-brand-block">
            <span className="hero-brand-name">Vinay Enterprises</span>
            <span className="hero-brand-tagline">Clean Energy Solutions</span>
          </div>
          <h1 className="hero-heading animate delay-1">
            Advanced Solar Installation<br />
            <span>&amp; Clean Energy Solutions</span>
          </h1>

          <div className="hero-actions animate delay-2">
            <a href="#contact" className="btn btn-filled">Get Free Quote</a>
            <a href="tel:+919451317257" className="btn btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              +91 94513 17257
            </a>
          </div>

          <div className="trust-badges animate delay-3">
            <span>✅ Expert Engineers</span>
            <span>⚡ 500+ Installations</span>
            <span>⭐ 5.0 Rated</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-right animate delay-2">
          <div className="hero-visual">
            <div className="hero-badge-tr">
              <div className="badge-tr-title">📍 Our Location</div>
              <div className="badge-tr-sub">Near Jio Office, Rath Road, Orai</div>
            </div>
            <div className="hero-img-stack">
              {heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`hero-slide-img ${i === current ? 'active' : ''}`}
                />
              ))}
              <div className="hero-dots">
                {heroImages.map((_, i) => (
                  <span
                    key={i}
                    className={`hero-dot ${i === current ? 'active' : ''}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </div>
            <div className="hero-badge-bl">
              <div className="badge-stars">⭐⭐⭐⭐⭐ &nbsp;5.0</div>
              <div className="badge-count">500+ Happy Clients</div>
              <div className="badge-label">Customer Ratings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
