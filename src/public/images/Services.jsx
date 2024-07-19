import React from "react";

import icon1 from "../../public/images/icon4.png";
import icon2 from "../../public/images/icon5.png";
import icon3 from "../../public/images/icon6.png";
import icon4 from "../../public/images/icon7.png";
import icon5 from "../../public/images/icon4.png";
import icon6 from "../../public/images/icon5.png";
import icon7 from "../../public/images/icon6.png";
import icon8 from "../../public/images/icon7.png";

import shape1 from "../../public/images/shape1.png";
import shape2 from "../../public/images/shape2.svg";
import shape3 from "../../public/images/shape3.svg";
import shape4 from "../../public/images/shape4.svg";
import shape5 from "../../public/images/shape5.png";
import PageBanner from '../Common/PageBanner'
import { FiPlusCircle } from "react-icons/fi";
import '../../styles/style.css';
import Contactformpopup from "../Contact/Contactformpopup";
import NavbarStyleFour from "../_App/NavbarStyleFour";
import Footer from "../_App/Footer";
import { Link } from "react-router-dom";
const ServicesStyle3 = () => {
  return (
    <>
    <NavbarStyleFour />
      <PageBanner pageTitle="OUR SERVICES" />
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon1} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/websitedevelopment">Website Design & Development</Link>
                </h3>
                <p>
                Designing and developing unique websites that blend creativity with technical precision for an unparalleled digital presence.
                </p>

                <Link to="/websitedevelopment" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon2} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/applicationdevelopment">Application Development</Link>
                </h3>
                <p>
                  "We offer professional website development services, crafting robust and user-friendly websites tailored to your business needs and objectives."
                </p>

                <Link to="/applicationdevelopment" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon3} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/digitalmarketing">Digital Marketing</Link>
                </h3>
                <p>
                  "We provide comprehensive digital marketing services to help businesses reach their target audience and achieve their marketing goals effectively."
                </p>

                <Link to="/digitalmarketing" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon4} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/e-commerce">E-Commerce Applications</Link>
                </h3>
                <p>
                You need information security services to proactively prevent and protect confidential data, as well as detect internal and external threats. Protect your business by choosing managed security service provider. 
                </p>

                <Link to="/e-commerce" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon5} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/processexcellence">PROCESS EXCELLENCE</Link>
                </h3>
                <p>
                  Lean & Six Sigma Specialists reduce costs, improve quality, enhance efficiency, shorten lead times, and boost satisfaction.
                </p>

                <Link to="/processexcellence" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon6} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/dataengineering">DATA ENGINEERING</Link>
                </h3>
                <p>
                  Skill Technologies provides engineering services for designing, developing, and deploying data-driven solutions across all business scales.
                </p>

                <Link to="/dataengineering" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon7} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/managedservices">MANAGED SERVICES</Link>
                </h3>
                <p>
                  Skill Technologies provides businesses with engineering services for efficient implementation of data-centric solutions across operational scales.
                </p>

                <Link to="/managedservices" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon8} alt="icon" width={60} height={60} />
                </div>
                <h3>
                  <Link to="/businessintelegence">BUSINESS INTELLIGENCE</Link>
                </h3>
                <p>
                  We aid businesses in data collection, cleaning, analysis, and creating visualizations for better decision-making.
                </p>

                <Link to="/businessintelegence" className="learn-more-btn">
                  <FiPlusCircle /> Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <img src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <img src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <img src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape5">
          <img src={shape5} alt="shape" width={182} height={146} />
        </div>
        <div className="shape6 rotateme">
          <img src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <img src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <img src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
      <Contactformpopup />
      <Footer />
    </>
  );
};

export default ServicesStyle3;
