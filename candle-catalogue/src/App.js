
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Tin from './components/Tin';
import Designer from './components/Designer';
import Decopauge from './components/Decopauge';
import Jar from './components/Jar';
import Sachet from './components/Sachet';
import Yoga from './components/Yoga';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tin-candles" element={<Tin />} />
          <Route path="/decoupage-candles" element={<Decopauge />} />
          <Route path="/designer-crystal-candles" element={<Designer />} />
          <Route path="/yoga-candles" element={<Yoga />} />
          <Route path="/wax-sachets" element={<Sachet />} />
          <Route path="/jar-candles" element={<Jar />} />
          </Routes>

        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;
