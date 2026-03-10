import React from 'react';
import { subsidyData } from '../../data/content';
import './Subsidy.css';

const Subsidy = () => {
  return (
    <section id="subsidy" className="subsidy">
      <div className="container">
        <div className="section-header">
          <h2>Government Subsidy on Solar</h2>
          <p>PM Surya Ghar: Muft Bijli Yojana - Get up to ₹78,000 subsidy on rooftop solar</p>
        </div>
        
        <div className="subsidy-content">
          <div className="subsidy-table">
            <table>
              <thead>
                <tr>
                  <th>System Size</th>
                  <th>System Cost</th>
                  <th>Govt Subsidy</th>
                  <th>Final Cost</th>
                </tr>
              </thead>
              <tbody>
                {subsidyData.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.size}</strong></td>
                    <td>{item.cost}</td>
                    <td className="subsidy-amount">{item.subsidy}</td>
                    <td className="final-cost">{item.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="subsidy-info">
            <div className="info-section">
              <h3>Key Points</h3>
              <ul>
                <li>Subsidy available for residential rooftop solar systems</li>
                <li>Maximum central subsidy is ₹78,000</li>
                <li>Direct bank transfer after installation & inspection</li>
                <li>Must use government-approved vendor</li>
                <li>Net-metering reduces electricity bills</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Benefits of On-Grid Solar</h3>
              <ul>
                <li>Reduce electricity bills by 60-90%</li>
                <li>Generate clean renewable energy</li>
                <li>Low maintenance, 20-25 years life</li>
                <li>Earn credits through net metering</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subsidy-cta">
          <p>We are a government-approved vendor. Get your subsidy processed hassle-free!</p>
          <a href="#contact" className="btn btn-primary">Apply for Subsidy</a>
        </div>
      </div>
    </section>
  );
};

export default Subsidy;
