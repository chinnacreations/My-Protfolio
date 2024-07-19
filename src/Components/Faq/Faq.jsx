import React from 'react'
import PageBanner from '../Common/PageBanner'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqimg from '../../public/images/agency-image/FAQ.png'

const Faq = () => {
    return (
        <>
            <PageBanner pageTitle='FREQUENTLY ASKED QUESTIONS' />
            <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 services-content">
                        <div className="section-title">
                            <h2>Frequently asked question</h2>
                            <div className="bar"></div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <h5>What technologies are you proficient in as a MERN stack developer?</h5>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p>MongoDB, Express.js, React.js, and Node.js, Python, Sql, MySQL, Typescript, etc...</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <h5>What are some common challenges in implementing data science projects?</h5>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>
                                                Keeping up with rapid technological changes and new frameworks.
                                            </li>
                                            <li>
                                                Ensuring seamless integration and responsiveness across various devices and platforms.
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
                                        <h5>What projects have you worked on as a MERN stack developer at Skill Technologies?</h5>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p>Developed responsive web applications and solutions using the MERN stack for various client needs.</p>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <h5>What are the projects still did you completes?</h5>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p>You've completed several projects, including:<br/>

                                        &rarr;Skill Technologies Website <br/>
                                        &rarr;Servizee Application <br/>
                                        &rarr; Datameadows Application <br/>
                                            These demonstrate your expertise in developing web applications and solutions.</p>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-12">
                        <img className='why-work-for-us-immage' src={faqimg} alt="Why work for us?" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq