import React, { useState } from 'react';
import { galleryImages } from '../../data/content';
import './Gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('panels');

  const tabs = [
    { id: 'panels', label: 'Solar Panels', images: galleryImages.panels },
    { id: 'inverters', label: 'Inverters', images: galleryImages.inverters },
    { id: 'batteries', label: 'Inverter Batteries', images: galleryImages.batteries },
    { id: 'automotive', label: 'Car/Tractor/Truck Batteries', images: galleryImages.automotive }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Our Product Gallery</h2>
          <p>Browse our collection of premium solar products</p>
        </div>

        <div className="gallery-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {tabs.find(tab => tab.id === activeTab)?.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`${activeTab} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
