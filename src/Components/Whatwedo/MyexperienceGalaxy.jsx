import React from 'react'
import PageBanner from '../Common/PageBanner'
import { Link } from 'react-router-dom'

import business from '../../public/images/team-image/galaxy.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyexperienceGalaxy = () => {
  return (
    <>
      <PageBanner pageTitle="GEEKY Tech SOLUTIONS" />
      <div className="services-area ptb-80">
        <div id='who-we-are' className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={business} alt="GEEKY Tech Solutions" className='business-detailpage-image' />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>GEEKY Tech Solutions</h2>
                <p>Mar-2025 - Feb-2026</p>
                <div className="bar"></div>
                <p>
                  At GEEKY Tech Solutions, my role as a Full Stack Developer involved developing high-performance, scalable web applications, specializing in dashboard development, interactive visualizations, and automation tool logic. Here are key highlights of my experience:
                </p>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5>Bulkly (Social Media Automation)</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Worked on building and optimizing social media automation features using the MERN stack. I improved scheduling performance, enhanced user interface responsiveness, and developed critical automation workflows.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>ESG Bureau Dashboard</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Contributed to the development of the ESG Bureau dashboard, integrated secure RESTful APIs, and optimized complex data visualization modules to present environmental, social, and governance metrics clearly.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <h5>Plot Networks Platform</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Developed scalable property listing UI components and integrated robust backend APIs for dynamic and real-time content loading, creating a seamless user experience.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    <h5>Buziness.ai (All-in-One AI Business Platform)</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Contributed to building frontend features and workspaces for Buziness AI. Developed user interfaces and workflow modules for features like the Design Expert (marketing creative builder), Post Expert (social media automation/scheduler), Ad Expert (Meta/Google Ad creation wizard), and Lead Expert (lead tracking and conversions) to streamline digital operations into one dashboard.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                  >
                    <h5>Front-End Performance Optimization</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Focused on improving page load speeds, resolving rendering bottlenecks, and ensuring cross-browser compatibility to provide a modern, premium user experience on all devices.
                    </p>
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

export default MyexperienceGalaxy;
