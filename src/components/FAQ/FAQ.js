import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Kitne kW ka solar system mere ghar ke liye sahi hai?',
    a: 'Yeh aapki bijli ki consumption par depend karta hai. Generally 1-3 kW system ek average ghar ke liye kaafi hota hai. Hamare experts free consultation mein aapko sahi size suggest karenge.'
  },
  {
    q: 'Kya aap Orai se bahar bhi installation karte ho?',
    a: 'Haan! Hum Orai se 50 km ke daayre mein sabhi areas mein installation aur service provide karte hain.'
  },
  {
    q: 'Government subsidy kaise milti hai?',
    a: 'PM Surya Ghar Yojana ke tahat residential rooftop solar par up to ₹78,000 ki subsidy milti hai. Hum aapko poori process mein help karte hain — application se lekar bank transfer tak.'
  },
  {
    q: 'Konsi brands available hain aapke paas?',
    a: 'Hum Exide, Luminous, UTL, Tata, Adani Solar aur Waaree jaise top brands stock karte hain. Sabhi certified aur warranty ke saath milte hain.'
  },
  {
    q: 'Solar system ki maintenance kitni hoti hai?',
    a: 'Solar systems ki maintenance bahut kam hoti hai. Hum AMC (Annual Maintenance Contract) bhi provide karte hain jisme regular checkup aur servicing shamil hai.'
  },
  {
    q: 'Lithium aur Lead Acid battery mein kya farak hai?',
    a: 'Lithium batteries zyada efficient, halki aur lambi life ki hoti hain lekin thodi mehengi hoti hain. Lead Acid batteries affordable hoti hain aur reliable backup deti hain. Dono types hamare paas available hain.'
  },
  {
    q: 'Car, tractor aur truck ki batteries bhi milti hain?',
    a: 'Haan! Hum sabhi types ki automotive batteries stock karte hain — car, tractor, truck, e-rickshaw aur bike batteries. Sabhi top brands available hain.'
  },
  {
    q: 'Installation ke baad koi problem aaye toh kya karein?',
    a: 'Hum installation ke baad bhi full support dete hain. Sirf call karein +91 9451317257 ya +91 9506600706 par, hamare technician jaldi aayenge.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Aapke common sawaalon ke jawab</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span>{faq.q}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
