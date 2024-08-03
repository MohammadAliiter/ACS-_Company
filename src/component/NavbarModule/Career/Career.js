import React from 'react';
import './Career.css';
import careerImage from '../../../Image/CareerImg/CareerImage.webp'


const Career = () => {
  return (
    <> 
    <div className='main-div'>
    <div className="career-container">  
      <h1 className="career-title">Ready to Pursue Opportunity?</h1>
      <p className="career-subtitle">Every outcome starts with a conversation</p>
      <form className="career-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume</label>
          <input type="file" id="resume" name="resume" required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      
     
    </div>
     <div className='img-container'>
     <img src= {careerImage} alt='careerlogo'/>
    </div>
    
    </div>
    </>
  );
};

export default Career;
