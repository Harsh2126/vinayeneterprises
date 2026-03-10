import React from 'react';
import { systems, images } from '../../data/content';
import './Systems.css';

const Systems = () => {
  return (
    <section id="systems" className="systems">
      <div className="container">
        <div className="section-header">
          <h2>Solar System Solutions</h2>
          <p>Choose the perfect system for your energy needs</p>
        </div>
        <div className="system-grid">
          {systems.map(system => (
            <div key={system.id} className={`system-card ${system.featured ? 'featured' : ''}`}>
              {system.featured && <span className="badge">Most Popular</span>}
              <div className="system-image">
                <img src={images[system.image]} alt={system.title} />
              </div>
              <div className="system-content">
                <h3>{system.title}</h3>
                <ul>
                  {system.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`btn ${system.featured ? 'btn-primary' : 'btn-outline'}`}>
                  {system.featured ? 'Get Quote' : 'Learn More'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Systems;
