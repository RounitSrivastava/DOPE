import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-about">
          <h3>Insights</h3>
          <p>
          Insights help enhance designs, refine user experiences, and optimize web strategies for impactful digital solutions
          </p>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="footer-column">
          <h3>Location</h3>
          <ul>
            <li>Odisha, India</li>
          </ul>
        </div>

        <div className="footer-contacts">
          <h3>Contacts</h3>
          <p>📞 +91 9304004546</p>
          <p>✉ insightsgrp@gmail.com</p>
          <p>📍 Bhubaneswar, Odisha, India</p>
        </div>
      </div>
      
      <div className="footer-line"></div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
