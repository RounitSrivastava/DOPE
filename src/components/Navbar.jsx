import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTumblr, FaYoutube, FaBars, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navItems = [
    ["Home", "home-container"],
    ["Service", "services-section"],
    ["Projects", "project-section"],
    ["About", "work-process"],
    ["Client", "testimonial-section"],
    ["Contact", "contact-section"]
  ];

  // Function to scroll to a section
  const scrollTo = (target) => {
    document.querySelector(`.${target}`).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  // Handle window resize to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Floating Social Icons */}
      <div className="floating-social">
        <a href="#" className="social-icon"><FaInstagram /></a>
        <a href="#" className="social-icon"><FaLinkedin/></a>
        <a href="https://x.com/Insights488734" className="social-icon"><FaTwitter /></a>
        <a href="https://chat.whatsapp.com/Jt0ugIFMltlL3IoqIRSiey " className="social-icon"><FaWhatsapp /></a>
      </div>

      {/* Navbar Container */}
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">Insights</div>

        {/* Desktop Navigation (Hidden on Small Screens) */}
        {!isMobile && (
          <div className="nav-links">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item" onClick={() => scrollTo(item[1])}>
                {item[0]}
              </div>
            ))}
          </div>
        )}

        {/* CTA Button (Hidden on Small Screens) */}
        {!isMobile && (
          <button className="cta-button" onClick={() => scrollTo("contact-section")}>
            Discuss for Projects
          </button>
        )}

        {/* Mobile Menu Icon (☰ Only on Small Screens) */}
        {isMobile && (
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Button Inside Popup - Bigger & Right Aligned */}
        <button className="close-button" onClick={() => setMenuOpen(false)}>✖</button>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav-item" onClick={() => scrollTo(item[1])}>
              {item[0]}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
