import React from "react";
import cercleShape from "../../public/images/services-left-image/cercle-shape.png";
import whyChooseUsImg from "../../public/images/why-choose-us-image/main-static.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoRocketOutline, IoDiamondOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
const Ourvalues = () => {
  return (
    <>
      <div className="why-choose-us ptb-80 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="section-title" id='skills'>
                <h2>Dynamic Skills & My Projects</h2>
                <div className="bar"></div>
                <p>
                  "Versatile Technical Proficiency & Interpersonal Skills". <br />
                  "Enthusiastic Learner, Team Player, and Multilingual Communicator".
                </p>
              </div>

              <div className="why-choose-us-image">
                <img
                  src={cercleShape}
                  className="rotateme animate-cercle-img"
                  alt="image"
                  width={524}
                  height={518}
                />

                <img
                  src={whyChooseUsImg}
                  alt="image"
                  width={379}
                  height={416}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <FaPeopleGroup size={50} />
                    </div>
                    <h3>Programming Languages</h3>
                    <p>
                      As a MERN stack developer, I specialize in building dynamic and responsive full-stack web applications using these core technologies
                      allowing for the creation of robust, scalable, and efficient full-stack applications.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <IoRocketOutline size={50} />
                    </div>
                    <h3>My Projects</h3>
                    <p>
                      I Developed My Projects UI&UX And Develop UI by using React :<br />
                      Here My Github Url: https://github.com/chinnacreations <br />
                      <span className="fw-bold">
                        &rarr; Servizee Application <br />
                        &rarr; Skill Technologies <br />
                        &rarr; Jobby Application<br />
                        &rarr; NXT-WATCH
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <GoShieldCheck size={50} />
                    </div>

                    <h3>Personal Interests</h3>

                    <p>
                    "My interests include learning new technologies and building a professional career."
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <IoDiamondOutline size={50} />
                    </div>
                    <h3>Requirement Gathering</h3>
                    <p>
                      Understand client requirements, evaluate
                      the requirements and understand the
                      real need and readiness of the project
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <CiBookmarkCheck size={50} />
                    </div>

                    <h3>Feasibility Check</h3>

                    <p>
                      We carefully analyse the data including data assessment, collect samples, work on proof of concept
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 margin-top-why-choose-us">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <FaBusinessTime size={50} />
                    </div>
                    <h3>Execution</h3>
                    <p>
                      Undertake projects that have crossed the feasibility check and that carefully put our development framework in place for execution
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourvalues;
