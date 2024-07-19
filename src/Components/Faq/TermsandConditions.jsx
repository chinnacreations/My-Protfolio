import React, { useState } from 'react';
import * as Icon from "react-feather";
import Pagebanner from '../Common/PageBanner'
import intro from './../../public/images/terms-conditions/intro.png'
import termsservices from './../../public/images/terms-conditions/useofcontent.png'
import qualityeff from './../../public/images/terms-conditions/accuracy.png'
import secuAvali from './../../public/images/terms-conditions/projects.png'
import plan from './../../public/images/Others/pricingplans.png'
import customersupport from './../../public/images/Others/customersupport.png'
import Confidentiality from './../../public/images/Others/Confidentiality.png'


const TermsandConditions = () => {


  const termsAndConditionsData = [
    {
      title: 'Introduction',
      text: "Welcome to my personal portfolio! This website showcases my professional journey, skills, and projects. By accessing and using this website, you agree to comply with the following terms and conditions.",
      image: intro 
    },
    {
      title: 'Use of Content',
      text: 'All content on this website, including text, images, and projects, is solely for informational purposes. It may not be reproduced or distributed without permission.',
      image: termsservices 
    },
    {
      title: 'Accuracy of Information',
      text: 'While I strive to keep the information on this website accurate and up-to-date, I make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.',
      image: qualityeff 
    },
    {
      title: 'Portfolio Projects',
      text: 'The projects featured on this website are examples of my work and may include proprietary or confidential information. They are intended to showcase my skills and experience.',
      image: secuAvali 
    },
    {
      title: 'External Links',
      text: 'This website may contain links to external websites that are not maintained or controlled by me. I am not responsible for the content or availability of these sites.',
      image: plan 
    },
    {
      title: 'Customer Support',
      text: 'Our qualified experts are available to assist you with any requests, issues, revisions, contracts, assets, solutions, or reports. We strive to provide exceptional customer support to ensure your satisfaction.',
      image: customersupport
    },
    {
      title: 'Modification of Terms',
      text: 'I reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on this website.',
      image: Confidentiality 
    },
  ];


  return (
    <>
      <Pagebanner pageTitle='TERMS AND CONDITIONS' />
      <div className="container tandc-section ptb-80">
        <div className="container">
          {termsAndConditionsData.map((section, index) => (
            <div className="row mt-5" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-7 mt-5">
                    <div className="section-title">
                      <h2>{section.title}</h2>
                      <div className="bar"></div>
                      <p className="para-who-we-serve">{section.text}</p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img src={section.image} alt="T&C" />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-5">
                    <img src={section.image} alt="T&C" />
                  </div>
                  <div className="col-md-7 mt-5">
                    <div className="section-title">
                      <h2>{section.title}</h2>
                      <div className="bar"></div>
                      <p className="para-who-we-serve">{section.text}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TermsandConditions