import React from 'react'
import PageBanner from '../Common/PageBanner'
import { Link } from 'react-router-dom'

import business from '../../public/images/team-image/wysele.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyexperienceWysele = () => {
  return (
    <>
      <PageBanner pageTitle="WYSELE TECHNOLOGIES" />
      <div className="services-area ptb-80">
        <div id='who-we-are' className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={business} alt="Wysele Technologies" className='business-detailpage-image' />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Wysele Technologies</h2>
                <p>Feb-2026 - Present</p>
                <div className="bar"></div>
                <p>
                  At Wysele Technologies, my role as a Full Stack Developer involves designing and implementing modern user interfaces, driving React and Next.js applications, and prioritizing performance, SEO, and robust user experiences. Here are the core highlights of my experience:
                </p>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5>Yuva Saathi (Bihar Skill Insights Portal)</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Developed and optimized the dashboard interface for the <a href="http://yuvasaathi.bihar.gov.in/" target="_blank" rel="noopener noreferrer" style={{color: '#00d9f2'}}>Yuva Saathi</a> platform. Implemented dynamic visualizations representing real-time skill insights, enrollment growth, sector distribution, and regional placement trends using React.js and modern charting libraries.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Bihar Mausam Sewa Kendra (BMSK)</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Contributed to the frontend development of the <a href="https://bmsk.gtplindia.com" target="_blank" rel="noopener noreferrer" style={{color: '#00d9f2'}}>Bihar Mausam Sewa Kendra (BMSK)</a> weather portal. Built responsive layout modules, integrated weather API feeds, and optimized real-time alerts and forecasts for a premium user experience across all devices.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <h5>HRMS (Human Resource Management System)</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Designed and engineered UI components for the Human Resource Management System (HRMS). Created complex role-based forms, dashboard views, and integrated backend endpoints for handling employee directory and leave management workflows.
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

export default MyexperienceWysele;
