import React from 'react'
import PageBanner from '../Common/PageBanner'
import { Link } from 'react-router-dom'

import business from '../../public/images/team-image/rockman.png'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Myexperience2 = () => {
  return (
    <>
      <PageBanner pageTitle="ROCKMAN INDUSTRIES LTD." />
      <div className="services-area ptb-80">
        <div id='who-we-are' className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={business} alt="business" className='business-detailpage-image' />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Rockamn Industries Ltd.</h2>
                <p>Nov-2019 - Aug-2022</p>
                <div className="bar"></div>
                <p>
                  I had the privilege of working at Rockman Industries LTD, a leading name in the manufacturing
                  sector. My role as a Die Maintenance and Shift Incharge provided me with a multifaceted
                  experience, encompassing technical expertise, leadership, and continuous improvement initiatives.
                  Here are some key highlights of my responsibilities and contributions:
                </p>
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5>Routine and Preventive Maintenance</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        Conducted regular inspections and maintenance of dies to ensure their optimal performance.
                      </li>
                      <li>
                        Implemented preventive maintenance schedules to minimize downtime and extend the lifespan of dies.
                      </li>
                    </ul>

                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Troubleshooting and Repair</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        Efficiently diagnosed and resolved die-related issues, ensuring minimal disruption to production.
                      </li>
                      <li>
                        Coordinated with the production team to quickly address and rectify any die failures or malfunctions.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Quality Assurance</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        Ensured that all maintenance activities were carried out following strict quality standards.
                      </li>
                      <li>
                        Maintained detailed records of maintenance activities to track die performance and identify areas for improvement.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Team Management</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        Supervised a team of skilled technicians and workers during my shift.
                      </li>
                      <li>
                        Assigned tasks and monitored progress to ensure smooth operations and adherence to production schedules.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Production Oversight</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        Managed the production floor, ensuring that all processes were running efficiently and safely.
                      </li>
                      <li>
                        Coordinated with other shift incharges to ensure seamless handovers and continuity of production.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Die Performance Enhancement</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        Analyzed die wear patterns and identified key factors contributing to premature failures.
                      </li>
                      <li>
                        Implemented process improvements and material enhancements to reduce wear and increase durability.
                      </li>
                      <li>Achieved a 20% increase in die lifespan, resulting in significant cost savings and reduced downtime.</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5> Shift Efficiency Improvement</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        Introduced a new shift scheduling system to optimize manpower utilization.
                      </li>
                      <li>
                        Streamlined communication channels between shifts to ensure quick resolution of issues.
                      </li>
                      <li>
                        Improved overall shift efficiency by 15%, leading to better production output and employee satisfaction.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
              <p>Working at Rockman Industries LTD was an enriching experience that allowed me to develop my technical skills, leadership abilities, and a commitment to continuous improvement. The challenges I faced and the successes I achieved have significantly contributed to my professional growth and prepared me for future endeavors in the manufacturing industry.</p>
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

export default Myexperience2