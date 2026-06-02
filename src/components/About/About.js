import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Vinay Enterprises</h2>
            <p className="owner-tag">👨‍💼 Owned & Managed by <strong>Vinay Gupta</strong></p>
            <p>Established in 2021, Vinay Enterprises is a trusted name in solar energy and battery solutions in Orai, Jalaun. We serve both residential and commercial customers with quality products and expert services within 50 km of Orai.</p>
            <div className="highlights">
              <div className="highlight-item">📍 Based in Orai, Jalaun</div>
              <div className="highlight-item">🚗 Service upto 50 km from Orai</div>
              <div className="highlight-item">🏠 Residential & 🏭 Commercial</div>
              <div className="highlight-item">⚡ All kW Solar Systems Available</div>
            </div>
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
                <h3>50km</h3>
                <p>Service Radius</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h4>Top Brand Products</h4>
              <p>Exide, Luminous, UTL, Tata, Adani & Waaree — all certified brands</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍🔧</div>
              <h4>Expert Installation</h4>
              <p>Professional team for all solar systems and battery installations</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h4>Best Pricing</h4>
              <p>Competitive rates with flexible payment options for all budgets</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛠️</div>
              <h4>AMC & Maintenance</h4>
              <p>Annual maintenance contracts and quick repair services available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
