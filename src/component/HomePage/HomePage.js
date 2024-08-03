import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../NavbarModule/Home/Home';
import Career from '../NavbarModule/Career/Career';
import Contact from '../NavbarModule/ContactUs/Contact';
import About from '../NavbarModule/About/About';
import Services from '../NavbarModule/Service/Service';
import Industries from '../NavbarModule/Industries/Industries';
import ScrollToTop from './ScrollToTop'; // Make sure the path is correct

function HomePage() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default HomePage;
