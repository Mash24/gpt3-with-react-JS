import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Brand / Logo Section */}
        <div className="footer__brand">
          <h2>GPT-3</h2>
          <p>Bringing AI to the world.</p>
        </div>

        {/* Links Section */}
        <div className="footer__links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer__socials">
          <h4>Follow Us</h4>
          <div className="footer__icons">
            <a href="#"><i className="fab fa-facebook"></i>Facebook</a>
            <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
            <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
            <a href="#"><i className="fab fa-linkedin"></i>Linkedin</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__copyright">
        <p>© 2025 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
