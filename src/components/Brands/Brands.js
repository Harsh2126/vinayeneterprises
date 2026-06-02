import React from 'react';
import './Brands.css';

const brands = [
  {
    name: 'Waaree',
    logo: 'https://5.imimg.com/data5/XY/UZ/SW/SELLER-77801847/waaree-poly-solar-panels.jpg',
  },
  {
    name: 'UTL Solar',
    logo: 'https://d3nut88kxhmnud.cloudfront.net/2025/12/Mobile-Banner.jpg',
  },
  {
    name: 'Exide',
    logo: 'https://docs.exideindustries.com/images/solar-sunday-banner-inside_mob.jpg',
  },
  {
    name: 'Adani Solar',
    logo: 'https://sunapecopower.com/wp-content/uploads/2024/04/Reasons-Why-Adani-Solar-Panels-are-Worth-the-Investment-1.png',
  },
  {
    name: 'Luminous',
    logo: 'https://www.electricmart.co.in/product-images/luminous_solar-%2BLOGO.png/2020128000000335007/1100x1100',
  },
];

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="section-header">
          <h2>Trusted Brands We Carry</h2>
          <p>We stock only the most reliable and certified brands in the industry</p>
        </div>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <h3>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
