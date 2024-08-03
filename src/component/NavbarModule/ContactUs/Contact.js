import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaBriefcase, FaQuestionCircle } from 'react-icons/fa';
const Contact = () => {
  return (
    <> 
       <div className='acs-contact'>
    <div className="contact-container">
      <div className="contact-info">
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <h3>Corporate Office:</h3>
            <p># B06, H-169, Sector 63, Noida , 201301, U.P. INDIA</p>
            <p>0120 4465842</p>
            <p>+91 93156 52636</p>
            <p>info@acstechconsulting.com</p>
          </div>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <h3>Registered Office:</h3>
            <p>#6, Kanti Devi Complex, Sector-53, Noida-201301, U.P. INDIA</p>
            <p>0120 4465842</p>
            <p>+91 93156 52636</p>
            <p>info@acstechconsulting.com</p>
          </div>
        </div>
      </div>

    </div>
    
    <form className="contact-form">
        <h2>Get In Touch with Us</h2>
        <div className="form-group">
          <FaUser className="form-icon" />
          <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
        </div>
        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <FaPhoneAlt className="form-icon" />
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <FaBriefcase className="form-icon" />
          <input type="text" id="companyName" name="companyName" placeholder="Company Name" />
        </div>
        <div className="form-group">
          <FaQuestionCircle className="form-icon" />
          <textarea id="opportunity" name="opportunity" placeholder="Tell us about your opportunity*" required />
        </div>
        <div className="Check-group">
          <label>
            <input type="checkbox" id="privacy" name="privacy" required />
            By checking this box, you consent to us storing and processing the information provided in accordance with our terms of Privacy Policy*
          </label>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
