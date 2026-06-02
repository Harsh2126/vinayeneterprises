import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Brands from './components/Brands/Brands';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import WhyUs from './components/WhyUs/WhyUs';
import Systems from './components/Systems/Systems';
import Subsidy from './components/Subsidy/Subsidy';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Brands />
      <Products />
      <Systems />
      <Subsidy />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default App;
