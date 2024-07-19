import React from "react";
import { Link } from "react-feather";
import aboutUs from "../../public/images/banner-image/aboutus.png";
import shape1 from "../../public/images/shape1.png";
import shape2 from "../../public/images/shape2.svg";
import shape3 from "../../public/images/shape3.svg";
import shape4 from "../../public/images/shape4.svg";
import shape5 from "../../public/images/shape5.png";

import icon1 from "../../public/images/icon4.png";
import icon2 from "../../public/images/icon5.png";
import icon3 from "../../public/images/icon6.png";
import icon4 from "../../public/images/icon7.png";

const AboutUs = () => {
  return (
    <div >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container" id="about-us">
          <div className="section-title  ">
                    <h2 className="">ABOUT US</h2>
                    <div className="bar"></div>
                    <p className="para-about-us">
                      Passionate software developer with a knack for crafting
                      efficient, scalable, and user-centric solutions. Dedicated
                      to continuous learning and leveraging cutting-edge
                      technologies to drive innovation. Committed to
                      transforming complex problems into seamless digital
                      experiences.
                    </p>
                  </div>
            <div className="row">
              <div className="col-12 col-md-6">
              <div className="row">
                    <div className="col-6">
                      <div className="single-solutions-box">
                        <div className="icon">
                          <img src={icon1} alt="icon"/>
                        </div>
                        <h3>Efficiency and Scalability</h3>
                        <p>
                          Focus on developing software that performs optimally
                          and can grow with user needs.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single-solutions-box">
                        <div className="icon">
                          <img src={icon2} alt="icon" width={60} height={60} />
                        </div>
                        <h3>Continuous Learning</h3>
                        <p>
                          Eager to stay updated with the latest technologies and
                          best practices to ensure innovative solutions.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="single-solutions-box">
                        <div className="icon">
                          <img src={icon1} alt="icon" width={60} height={60} />
                        </div>
                        <h3>User-Centric Design</h3>
                        <p>
                        Dedicated to creating intuitive and impactful digital experiences by understanding user needs and behaviors.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single-solutions-box">
                        <div className="icon">
                          <img src={icon2} alt="icon" width={60} height={60} />
                        </div>
                        <h3>Commitment to Quality</h3>
                        <p>
                        Dedicated to delivering high-quality software through best practices, rigorous testing, user feedback prioritization, and continual skill refinement.
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-md-6" style={{marginTop:'45px'}}>
                <img src={aboutUs} alt="About Us" className="about-us-image-myprot" />
              </div>
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
  );
};

export default AboutUs;
