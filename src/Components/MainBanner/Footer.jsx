import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = "9160591908";
    const message = "Hey Thirumani Satish! I am Impressed with your skills, let's connect. Thank you!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener noreferrer");
  };

  return (
    <footer className="premium-footer">
      {/* Decorative diagonal line accents */}
      <div className="diagonal-line line-1"></div>
      <div className="diagonal-line line-2"></div>
      <div className="diagonal-line line-3"></div>

      <div className="container">
        <div className="row">
          {/* Left Column: Brand, Desc, Socials, Back to Top */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0" data-aos="fade-in" data-aos-duration="500">
            <div className="footer-logo-area">
              <Link to="/" onClick={scrollToTop} className="logo-box">
                S
              </Link>
              <Link to="/" onClick={scrollToTop} className="logo-text">
                SATISH THIRUMANI
              </Link>
            </div>
            <p className="footer-desc">
              Passionate Full Stack Developer specializing in crafting efficient, scalable, and user-centric web applications. Focused on backend engineering, cloud integration, and premium front-end interfaces.
            </p>
            <ul className="footer-socials">
              <li>
                <a
                  href="https://x.com/satishthiruman?t=us8fPMHUkYWZLOdIRYuAHg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chinnacreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chinna_creations_0191?igsh=dHo3YWNreGxoYzR2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61562227289264&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
            <div>
              <button className="back-to-top-btn" onClick={scrollToTop}>
                <FaChevronUp size={10} style={{ marginRight: "6px" }} /> BACK TO TOP
              </button>
            </div>
          </div>

          {/* Right Columns (three columns) */}
          <div className="col-lg-7 col-md-12">
            <div className="row">
              {/* COMPANY Column */}
              <div className="col-md-4 col-sm-4 col-6" data-aos="fade-in" data-aos-delay="100" data-aos-duration="500">
                <h3 className="widget-title">Company</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#about-us">About Me</a>
                  </li>
                  <li>
                    <a href="#my-experience">My Experience</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#skills">My Skills</a>
                  </li>
                  <li>
                    <a href="#my-qualification">My Qualification</a>
                  </li>
                </ul>
              </div>

              {/* EXPERTISE Column */}
              <div className="col-md-4 col-sm-4 col-6" data-aos="fade-in" data-aos-delay="200" data-aos-duration="500">
                <h3 className="widget-title">Expertise</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/" onClick={scrollToTop}>React & Next.js</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={scrollToTop}>Node.js & Express</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={scrollToTop}>RESTful APIs</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={scrollToTop}>Cloud Services (AWS)</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={scrollToTop}>Web Dev</Link>
                  </li>
                </ul>
              </div>

              {/* CONNECT Column */}
              <div className="col-md-4 col-sm-4 col-12" data-aos="fade-in" data-aos-delay="300" data-aos-duration="500">
                <h3 className="widget-title">Connect</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/contact" onClick={scrollToTop}>Contact</Link>
                  </li>
                  <li>
                    <a href="mailto:satishthirumani1999@gmail.com">Email Us</a>
                  </li>
                  <li>
                    <a href="tel:+919160591908" onClick={handleWhatsAppClick}>WhatsApp</a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/chinnacreations"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright mustard-yellow bottom bar */}
      <div className="copyright-bar">
        <div className="container">
          <div className="copyright-bar-content">
            <p className="copyright-text">
              © {currentYear} SATISH THIRUMANI. ALL RIGHTS RESERVED.
            </p>
            <div className="copyright-links">
              <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
              <Link to="/terms-conditions" onClick={scrollToTop}>Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
