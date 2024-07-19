import React from 'react'
import PageBanner from '../Common/PageBanner'
import { Link } from 'react-router-dom'

import business from '../../public/images/team-image/Vem.jpg'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Myexperience1 = () => {
  return (
    <>
      <PageBanner pageTitle="VEM TECHNOLOGIES pvt.ltd" />
      <div className="services-area ptb-80">
        <div id='who-we-are' className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={business} alt="business" className='business-detailpage-image' />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>VEM TECHNOLOGIES pvt.ltd</h2>
              <p>Aug-2018 - Nov-2019</p>
                <div className="bar"></div>
                <p>
                I had the opportunity to work at VEM TECHNOLOGIES Pvt. Ltd., a prominent company 
                known for its innovative engineering solutions and high-quality products. 
                My role as a tool design and assembly professional was both challenging and rewarding,
                offering a platform to enhance my skills and contribute to significant projects.
                </p>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5>Innovative Tool Design</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                    At VEM TECHNOLOGIES Pvt. Ltd., I was responsible for creating precise and efficient tool designs 
                    using advanced CAD software. Collaborating with the engineering team, 
                    I ensured all tools met stringent quality and functionality standards.
                    </p>
                 
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Meticulous Assembly Oversight</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>I managed the assembly process, guaranteeing correct alignment and functionality of all components. This role required a deep understanding of mechanical systems and adept problem-solving skills to address any assembly issues.</p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Professional Growth and Collaboration</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Working in a collaborative and innovative environment at VEM TECHNOLOGIES Pvt. Ltd. allowed me to enhance my skills and gain valuable experience with cutting-edge technologies, contributing significantly to my professional development.</p>
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

export default Myexperience1