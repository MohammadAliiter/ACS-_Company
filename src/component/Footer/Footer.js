import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='acs_footer'>
        <div className='footer_section'>
          <h4>Services</h4>
          <ul>
            <li>Digital & Software</li>
            <li>Cloud Services</li>
            <li>Mobile Application</li>
            <li>Cybersecurity</li>
            <li>Hardware & Networking</li>
            <li>Training & Placement</li>
            <li>Digital Marketing</li>
            <li>Business Analytics</li>
            <li>AI/ML/IoT</li>
          </ul>
        </div>

        <div className='footer_section'>
          <h4>Industries</h4>
          <ul>
            <li>Banking</li>
            <li>Education & Institutions</li>
            <li>Hi-Tech, Products & Platforms</li>
            <li>Insurance</li>
            <li>Manufacturing</li>
            <li>Professional Services</li>
            <li>Infrastructure</li>
            <li>Energy</li>
            <li>Retail & Consumer</li>
          </ul>
        </div>

        <div className='footer_section'>
          <h4>Contact Us</h4>
          <address>
            # B06, H-169, Sector 63, Noida, 201301, U.P. INDIA<br />
            0120 4465842<br />
            +91 93156 52636<br />
            <a href='mailto:info@acstechconsulting.com'>info@acstechconsulting.com</a>
          </address>
        </div>

        <div className='footer_section'>
          <h4>Follow Us</h4>
          <div className='social_links'>
            <i className="fab fa-facebook-f" title="Facebook"></i>
            <i className="fab fa-instagram" title="Instagram"></i>
            <i className="fab fa-youtube" title="YouTube"></i>
          </div>

          <div className='map_container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14614.3582142738!2d77.3774755!3d28.6252978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc63e499cbe5%3A0x0!2zMjggNjI0MzM!5e0!3m2!1sen!2sin!4v1691501083696!5m2!1sen!2sin"
              width="500"
              height="80"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>
          <a href='#'>Privacy & Cookie Policy</a> | <a href='#'>Terms of Services</a>
        </p>
        <p>© 2023 ACS Consulting. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
