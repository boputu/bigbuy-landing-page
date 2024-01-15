import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <button className="social-btn">
        <FaFacebookF className="social-icon" />
      </button>

      <button className="social-btn">
        <FaTwitter className="social-icon" />
      </button>

      <button className="social-btn">
        <FaGoogle className="social-icon" />
      </button>

      <button className="social-btn">
        <FaInstagram className="social-icon" />
      </button>

      <button className="social-btn">
        <FaLinkedin className="social-icon" />
      </button>

      <button className="social-btn">
        <FaGithub className="social-icon" />
      </button>
    </div>
  );
};

export default Footer;