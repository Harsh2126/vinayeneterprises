import React from 'react';
import './WhyUs.css';

const highlights = [
  {
    icon: '🏅',
    title: 'Certified Engineers',
    desc: 'Our team holds industry certifications and brings years of hands-on solar expertise.',
  },
  {
    icon: '🛡️',
    title: '10 Year Warranty',
    desc: 'Industry-best warranty on all installations — panels, inverters, and workmanship.',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    desc: 'Round-the-clock assistance for any issue, query, or emergency service request.',
  },
  {
    icon: '💰',
    title: 'Best Pricing',
    desc: 'Transparent, competitive pricing with no hidden costs. Best ROI guaranteed.',
  },
];

const WhyUs = () => (
  <section id="whyus" className="whyus">
    <div className="container">
      <div className="section-header">
        <h2>Why Choose Us</h2>
        <p>Trusted by 500+ customers across Orai &amp; surrounding districts</p>
      </div>
      <div className="whyus-grid">
        {highlights.map((h, i) => (
          <div key={i} className="whyus-card animate" style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="whyus-icon">{h.icon}</div>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
