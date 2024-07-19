import React from 'react'
import PageBanner from '../Common/PageBanner'
import { Link } from 'react-router-dom'

import business from '../../public/images/team-image/skill.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Myexperience4 = () => {
  return (
    <>
      <PageBanner pageTitle="SKILL TECHNOLOGIES" />
      <div className="services-area ptb-80">
        <div id='who-we-are' className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={business} alt="business" className='business-detailpage-image' />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Skill Technologies</h2>
                <p>Jan-2024 - Still</p>
                <div className="bar"></div>
                <p>
                At Skill Technologies, my role as a MERN Stack Developer involves developing robust and scalable web applications with a keen focus on responsive design. Here are three key points about my experience:
                </p>
              </div>

              <div>
               
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Working at Skill Technologies</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p> I have honed my skills as a MERN stack developer, creating responsive web applications and enhancing user experience. One of my key contributions has been integrating SEO into our websites, significantly boosting their online visibility and search engine rankings.</p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5>Web Application Development</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                    I am responsible for creating dynamic and efficient web applications 
                    using the MERN stack (MongoDB, Express.js, React, and Node.js). 
                    This includes developing both front-end interfaces 
                    and back-end services that cater to various client requirements.
                    </p>
                 
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Responsive Design</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Ensuring that all web applications and components are fully responsive and provide an optimal user experience across a wide range of devices, including desktops, tablets, and mobile phones.</p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Collaboration and Optimization</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>I work closely with cross-functional teams to optimize application performance and user experience. This includes implementing best practices in coding, conducting thorough testing, and performing regular updates to enhance functionality and security.</p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-5">
            <Link to="/" className="btn btn-primary me-2" onClick={() => window.scroll(0, 1000)}>
                Back
              </Link>
             <Link to="/contact" className="btn btn-primary">
                Reach us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Myexperience4