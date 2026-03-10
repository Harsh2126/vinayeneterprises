import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Systems from './components/Systems/Systems';
import Subsidy from './components/Subsidy/Subsidy';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Systems />
      <Subsidy />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
