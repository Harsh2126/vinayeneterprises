import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Why Choose Vinay Enterprises?</h2>
            <p>With over 4 years of experience in the solar industry, we are your trusted partner for all solar energy solutions. We provide end-to-end services from consultation to installation and maintenance.</p>
            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h4>Certified Products</h4>
              <p>All products are certified and from trusted brands</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨🔧</div>
              <h4>Expert Installation</h4>
              <p>Professional team with years of experience</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h4>Best Pricing</h4>
              <p>Competitive rates with flexible payment options</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛠️</div>
              <h4>After-Sales Support</h4>
              <p>Comprehensive maintenance and support services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
