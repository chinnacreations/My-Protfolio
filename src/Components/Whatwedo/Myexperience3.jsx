import React from 'react'
import PageBanner from '../Common/PageBanner'
import { Link } from 'react-router-dom'

import business from '../../public/images/team-image/Sairam.png'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Myexperience3 = () => {
  return (
    <>
      <PageBanner pageTitle="SAIRAM DESIGNS & DRAFTING" />
      <div className="services-area ptb-80">
        <div id='who-we-are' className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={business} alt="business" className='business-detailpage-image' />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Sairam Designs & Drafting</h2>
                <p>Feb-2023 - Nov-2023</p>
                <div className="bar"></div>
                <p>
                At Sairam Designs and Drafting, my role as an AutoCAD designer involved creating detailed and precise layouts for pharmaceutical companies. My key responsibilities included:
                </p>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5>Pharmaceutical Facility Layouts</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                    Designing comprehensive layouts for pharmaceutical facilities, ensuring optimal space utilization and workflow efficiency.
                    </p>
                 
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Equipment Placement</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Strategically placing equipment within the layouts to adhere to industry standards and regulations, facilitating smooth operations and maintenance.</p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Collaboration and Customization</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Working closely with clients to understand their specific needs and customizing designs to meet their unique requirements, ensuring satisfaction and functionality.</p>
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

export default Myexperience3