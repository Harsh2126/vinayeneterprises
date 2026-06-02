import React from 'react';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 014 0"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Solar Panel Installation',
    desc: 'Professional on-grid, off-grid and hybrid solar systems for homes & businesses. All kW sizes handled end-to-end.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="12" x2="15" y2="15"/>
      </svg>
    ),
    title: 'Solar Consultancy',
    desc: 'Expert site assessment, system design, and government subsidy guidance to maximise your solar investment.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2"/><line x1="10" y1="6" x2="14" y2="6"/><line x1="12" y1="10" x2="12" y2="14"/>
      </svg>
    ),
    title: 'Inverter & Battery Solutions',
    desc: 'Full range of MPPT inverters, lithium-ion & lead-acid batteries for reliable 24/7 energy storage.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    title: 'Solar Energy Audit',
    desc: 'Detailed energy consumption analysis and performance audit to optimise your existing solar setup.',
  },
];

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Complete solar &amp; energy solutions — from consultation to installation</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card animate" style={{ animationDelay: `${i * 0.12}s` }}>
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="#contact" className="service-link">Learn More →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
