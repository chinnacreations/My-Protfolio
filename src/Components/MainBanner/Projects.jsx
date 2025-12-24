import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Skill from "../../public/images/projects/skill.png";
import tcs from "../../public/images/projects/tcs.png";
import Drseenas from "../../public/images/projects/DrseenasDental.png";
import servizee from "../../public/images/projects/servizee.png";
import beemtech from "../../public/images/projects/beentech.png";
import bannerimage from "../../public/images/projects/bannerimage.png";
import esgbureau from "../../public/images/projects/esgbureau.png";
import plotNetwworks from "../../public/images/projects/plotnetworks.png"
import Bulkly from "../../public/images/projects/bulkly.png"
import { Link } from "react-router-dom";

const technologiesData = [

  { image: esgbureau, alt: "ESG Bureau", url: "https://esgbureau.com/" },
  { image: plotNetwworks, alt: "Plot Networks", url: "https://plotnetwork.in/" },

  { image: Bulkly, alt: "Bulkly", url: "https://live.bulkly.io" },

  { image: Skill, alt: "Skill", url: "https://infoswangroup.com/" },
  { image: tcs, alt: "TCS", url: "" },
  {
    image: Drseenas,
    alt: "Drseenas Dental",
    url: "https://drseenasdental.com/home/",
  },
  { image: servizee, alt: "Servizee", url: "" },
  { image: beemtech, alt: "beemtech", url: "https://beemtech.netlify.app/" },
];

const Projects = () => {
  const swiperRef = useRef(null); // Create a ref to access the Swiper instance

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext(); // Trigger slide transition
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div className="mb-4 mt-5">
        <div className="section-title" id="projects">
          <h3 className="text-center mt-5">MY PROJECTS</h3>
          <div className="bar"></div>
        </div>
        <div className="brand-area mt-1">
          <div className="container th-container">
            <Swiper
              spaceBetween={10}
              slidesPerView={3} // Fixed number of slides per view
              loop={true} // Enable continuous loop
              ref={swiperRef} // Assign ref to Swiper
              className="swiper th-slider"
            >
              {technologiesData.map((tech, index) => (
                <SwiperSlide key={index}>
                  <div className="brand-box">
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={tech.image}
                        alt={tech.alt}
                        height={200}
                        width={400}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={bannerimage} alt="bannerimage" />
          </div>
          <div className="col-12 col-md-6">
            <div className="section-title">
              <h3 className="text-center">MY PROFESSIONAL JOURNEY</h3>
              <div className="bar"></div>
              <p>Over the past year, I've gained valuable hands-on experience working with a diverse range of projects, enhancing my skills as a MERN stack developer. I've collaborated with various clients and companies, contributing to the development and deployment of innovative solutions that meet their unique needs. My journey has involved both front-end and back-end development, utilizing the latest technologies to create responsive and efficient web applications.</p>
              <ul className="list-style">
                <li>
                  <span>
                    <Link to="https://live.bulkly.io/" target="_blank" className="span-link">
                      Bulkly (Galaxy Tech) :
                    </Link>
                  </span>
                  Worked on building and optimizing social media automation features using MERN stack, improving scheduling performance and UI responsiveness.
                </li>

                <li>
                  <span>
                    <Link to="https://esgbureau.com/" target="_blank" className="span-link">
                      ESG Bureau (Galaxy Tech) :
                    </Link>
                  </span>
                  Contributed to dashboard development, API integrations, and optimized ESG data visualization modules.
                </li>

                <li>
                  <span>
                    <Link to="https://plotnetwork.in/" target="_blank" className="span-link">
                      Plot Networks (Galaxy Tech) :
                    </Link>
                  </span>
                  Developed scalable property listing UI components and integrated backend APIs for dynamic content loading.
                </li>
                <li><span ><Link to="https://infoswangroup.com/" target="_blank" className="span-link">Skill Technologies :</Link></span>Independently developed and maintained high-performance applications, contributing to the company's innovative offerings.</li>
                <li><span ><Link to="https://drseenasdental.com/home/" target="_blank" className="span-link">Drseenas Dental :</Link></span>Collaboratively worked with a team to create a user-friendly, responsive website, significantly improving the online presence of this healthcare provider.</li>
                <li><span ><Link to="" target="_blank" className="span-link">Servizee :</Link></span>Single-handedly developed core functionalities that power this service-oriented platform, ensuring seamless operations.</li>
                <li><span ><Link to="https://beemtech.netlify.app/" target="_blank" className="span-link">Beemtech Infra llp :</Link></span>Developed the front-end for their construction website, delivering a robust and scalable user interface that drives this tech enterprise forward.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
