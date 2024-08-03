import React, { useState } from 'react';
import AboutImg from '../../../Image/About.jpg';
import img1 from "../../../Image/AboutImg/Purpose.jpg"
import img2 from "../../../Image/AboutImg/Vision.jpg"
import img3 from "../../../Image/AboutImg/Vlue.webp"
import './About.css';

function About() {
  const [selectedSection, setSelectedSection] = useState('purpose');

  const renderContent = () => {
    switch (selectedSection) {
      case 'purpose':
        return (
          <div className="content">
            <p>To Deliver Value with a SMART Approach: Safe, Measurable, Accountable, Responsive, Trustworthy</p>
            <img src={img1} alt="Purpose" />
          </div>
        );
      case 'vision':
        return (
          <div className="content">
            <p>To Stand as the World’s Most Loved Digital Transformation Partner</p>
            <img src={img2} alt="Vision" />
          </div>
        );
      case 'values':
        return (

          <div className="content">
            <p>To Deliver Value with a SMART Approach: Safe, Measurable, Accountable, Responsive, Trustworthy</p>
            <img src={img3} alt="Values" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>  
    <div className="acsa-about-container">
      <div className="acsa-image-overlay">
        <img src={AboutImg} alt="About ACS Consulting" className="acsa-about-image" />
        <div className="acsa-text-overlay">
          <h1>About ACS Consulting</h1>
          <p>We Empower Clients With World-Class Technology Products, Services, And Solutions</p>
        </div>
      </div>
      
      <div className="about-content">
        <div className="buttons">
          <button onClick={() => setSelectedSection('purpose')}>Our Purpose</button>
          <button onClick={() => setSelectedSection('vision')}>Our Vision</button>
          <button onClick={() => setSelectedSection('values')}>Our Values</button>
        </div>
      </div>
      
      <div className="description">
        {renderContent()}
      </div>
    </div>
    </>
  );
}

export default About;
