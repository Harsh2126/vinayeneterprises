import React from 'react';
import { images } from '../../data/content';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images.hero})`}}
    >
      <div className="hero-content">
        <h1>Power Your Future with Solar Energy</h1>
        <p>Leading Provider of Solar Panels, Inverters & Complete Energy Solutions</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get Free Quote</a>
          <a href="#products" className="btn btn-secondary">View Products</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
