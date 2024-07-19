import React, { useState } from 'react';
import Pagebanner from '../Common/PageBanner'
import { Link } from 'react-router-dom'

import privacy from '../../public/images/agency-image/privacypolicy.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const PrivacyPolicy = () => {

  const [readmore, setReadmore] = useState(false);
  const [btnreadmore, setbtnreadmore] = useState('Readmore')
  const fireReadmore = () => {
    if (readmore === true) {
      setReadmore(false)
      setbtnreadmore('Readmore')
    } else {
      setReadmore(true)
      setbtnreadmore('Readless')
    }
  }
  return (
    <>
      <Pagebanner pageTitle='PRIVACY POLICY' />
      <div className="services-area ptb-80">
        <div id='who-we-are' className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={privacy} alt="business" className='business-detailpage-image' />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>PRIVACY POLICY</h2>
                <div className="bar"></div>
                <p>
                  This portfolio website collects and stores personal information solely for the purpose of showcasing professional experience and skills.
                  We do not share your information with third parties and adhere to all data protection regulations to ensure your privacy is maintained.
                </p>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5>Data Protection</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Outline measures you take to protect the data, like encryption or secure hosting.
                    </p>

                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Data Collection</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Specify what personal data (if any) you collect, such as contact information or visitor analytics.</p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Data Usage</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Explain how you use the collected data, such as for contacting potential clients or improving user experience.</p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>Third Parties</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Mention if you share data with any third parties, like analytics services or hosting providers.

                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h5>User Rights</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Explain visitors' rights regarding their data, such as requesting access, correction, or deletion..</p>
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

export default PrivacyPolicy