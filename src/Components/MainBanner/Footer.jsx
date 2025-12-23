import React from "react";
import { Link } from "react-router-dom";


import logo from "../../public/Logos/TITLE LOGO.png";
import map from '../../public/images/map.png'
import shape1 from '../../public//images/shape1.png'
import shape2 from '../../public//images/shape2.svg'

import { CiLocationOn, CiMail, CiMobile1 } from "react-icons/ci";
import { FaXTwitter, FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear();
  const handleWhatsAppClick = () => {
    const phoneNumber = '9160591908';
    const message = `Hey Thirumani Satish! I am Impressed Your Skills, Could you connect each other, Thank You!.`; // Optional: Replace with your message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener noreferrer');
  };
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src={logo} alt="logo" className="logo-image-h-w " />
                  </Link>
                </div>
                <p>
                  Passionate software developer dedicated to crafting efficient, scalable, and user-centric solutions. With a keen interest in continuous learning, I thrive on leveraging cutting-edge technologies to drive innovation and solve complex problems, turning them into seamless digital experiences. My journey in software development is guided by a strong commitment to delivering high-quality solutions that meet both user needs and business objectives.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>Company</h3>

                <ul className="list">
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
                    <a href='#my-qualification' className="nav-link">
                      My Qualification
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <Link to="/faq" onClick={scrollToTop}>FAQ's</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions" onClick={scrollToTop}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">My SKills</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <CiLocationOn />
                    <span className="fw-bold"> Permanent Address – </span>
                    #1-142, Garesepudi, Kruthivennu mandal,Machilipatnam, Krishna Dist, 521324, Andhra Pradesh.
                  </li>
                  <li>
                    <CiLocationOn />
                    <span className="fw-bold"> Present Address – </span>
                    12-4-136/4/B, Pragathi nagar, Moosapet, Hyderabad, Telangana
                  </li>

                  <li>
                    <CiMail />
                    Email:{" "}
                    <a href="mailto:satishthirumani1999@gmail.com">satishthirumani1999@gmail.com</a>
                  </li>
                  <li>
                    <CiMobile1 />
                    Phone: <a href="tel:+919160591908">9160591908</a>
                  </li>
                </ul>

                <ul className="social-links text-center">
                  <li>
                    <a
                      href="tel:+919160591908"
                      className="whatsapp"
                      target="_blank"
                      onClick={handleWhatsAppClick}
                    >
                      <FaWhatsapp />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://x.com/satishthiruman?t=us8fPMHUkYWZLOdIRYuAHg&s=09"
                      className="twitter twitter-contact-page"
                      target="_blank"
                    >
                      <FaXTwitter />
                    </a>
                  </li>


                  <li>
                    <a
                      href="https://www.linkedin.com/in/chinnacreations"
                      className="linkedin"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/chinna_creations_0191?igsh=dHo3YWNreGxoYzR2"
                      className="instagram"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61562227289264&mibextid=ZbWKwL"
                      className="facebook"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright © 2024 THIRUMANI SATISH | All Rights Reserved {' '}
                  <a href="#" className="learn-more-btn">
                    THIRUMANI SATISH
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={map}
          className="map"
          alt="map"
          width={910}
          height={443}
        />

        {/* Shape Images */}
        <div className="shape1">
          <img
            src={shape1}
            alt="shape"
            width={202}
            height={202}
          />
        </div>

        <div className="shape8 rotateme">
          <img src={shape2} alt="shape" width={22} height={22} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
