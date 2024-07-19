import React from "react";

import icon3 from "../../public/images/Whoweserve/Media.png";


import mernstack from '../../public/images/team-image/Mernstack.png'
import tool from '../../public/images/team-image/Tool-and-Die-Making.png'
import education from '../../public/images/banner-image/education.png'

const Whoweserve = () => {
  return (
    <>


      <div className="solutions-area ptb-80">
        <div className="container" >
          <div className="row">
            <div className="col-7">
            <div className="section-title" id='my-qualification'>
            <h2>MY QUALIFICATION</h2>
            <div className="bar"></div>
            <p className="para-who-we-serve">
              I hold a diploma in Tool & Die Making, equipping me with strong foundational knowledge in the field. Additionally, I've completed a certification course in Nxt Wave CCBP, enhancing my skills in MERN Stack Developer.
            </p>
          </div>
            </div>
            <div className="col-5">
            <img src={education} alt="" height={250} width={300} />
            </div>
          </div>
        
          <div className="row justify-content-center">
           
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={mernstack} alt="icon" width={130} height={130} />
                </div>
                <h3 className="text-center">
                  MERN STACK DEVELOPER
                </h3>
                <p>Certification Course At CCBP NXTWAVE, I learned MERN stack development, mastering MongoDB, Express.js, React, and Node.js for building dynamic web applications with a robust full-stack skill set.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon text-center">
                  <img src={tool} alt="icon" width={195} height={195} />
                </div>
                <h3 className="text-center">
                  DIPLOMA IN TOOL AND DIE MAKING
                </h3>
                <p>The Diploma in Tool and Die Making at NTTF equipped me with comprehensive skills in precision engineering,
                  Autocad, NX, and tool design, preparing me for advanced manufacturing roles in the industry.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={icon3} alt="icon" width={150} height={150} />
                </div>
                <h3 className="text-center">
                  X Class
                </h3>
                <p>X class SSC board at Mjpapbcwerls provided foundational education in various subjects essential for further academic pursuits and practical life skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Whoweserve;
