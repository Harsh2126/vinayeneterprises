import React, { useState } from 'react';
import { contactInfo } from '../../data/content';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', service: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xbdzgjbv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', city: '', service: '', message: '' });
        alert('Thank you! We will contact you soon.');
      } else {
        setStatus('error');
        alert('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      alert('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Info Panel */}
          <div className="contact-info animate">
            <h2>Get in Touch</h2>
            <p>Ready to go solar? Contact us for a free consultation and site visit.</p>
            <div className="info-items">
              <div className="info-item">
                <span className="info-label">📍 Address</span>
                <span>{contactInfo.address}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📞 Phone</span>
                <span>{contactInfo.phone[0]}<br />{contactInfo.phone[1]}</span>
              </div>
              <div className="info-item">
                <span className="info-label">✉️ Email</span>
                <span>{contactInfo.email[0]}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🕒 Hours</span>
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form animate delay-1" onSubmit={handleSubmit}>
            <h3>Request a Free Quote</h3>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="city" placeholder="Your City *" value={formData.city} onChange={handleChange} required />
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Type of Service *</option>
                <option value="Solar Panel Installation">Solar Panel Installation</option>
                <option value="Solar Consultancy">Solar Consultancy</option>
                <option value="Inverter & Battery Solutions">Inverter &amp; Battery Solutions</option>
                <option value="Solar Energy Audit">Solar Energy Audit</option>
                <option value="Repair & Maintenance">Repair &amp; Maintenance</option>
                <option value="Subsidy Assistance">Subsidy Assistance</option>
              </select>
            </div>
            <textarea name="message" placeholder="Tell us about your requirements..." rows="4" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit" className="btn btn-filled form-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
