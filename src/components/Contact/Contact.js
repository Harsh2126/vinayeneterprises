import React, { useState } from 'react';
import { contactInfo } from '../../data/content';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdzgjbv';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Thank you for your inquiry! We will contact you soon.');
      } else {
        setStatus('error');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Ready to go solar? Contact us for a free consultation</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Visit Us</h4>
              <p>{contactInfo.address}</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h4>Call Us</h4>
              <p>{contactInfo.phone[0]}<br/>{contactInfo.phone[1]}</p>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h4>Email Us</h4>
              <p>{contactInfo.email[0]}<br/>{contactInfo.email[1]}</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h4>Business Hours</h4>
              <p>{contactInfo.hours}</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Request a Quote</h3>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your requirements..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button 
              type="submit" 
              className="btn btn-primary btn-large"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
