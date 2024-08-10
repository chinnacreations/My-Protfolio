import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Skill from "../../public/images/projects/skill.png";
import tcs from "../../public/images/projects/tcs.png";
import Drseenas from "../../public/images/projects/DrseenasDental.png";
import servizee from "../../public/images/projects/servizee.png";
import beemtech from "../../public/images/projects/beentech.png";
import bannerimage from "../../public/images/projects/bannerimage.png";
import { Link } from "react-router-dom";

const technologiesData = [
  { image: Skill, alt: "Skill", url: "https://skilltechnologies.in/" },
  { image: tcs, alt: "TCS", url: "http://trivedhi.com/" },
  {
    image: Drseenas,
    alt: "Drseenas Dental",
    url: "https://drseenasdental.com/home/",
  },
  { image: servizee, alt: "Servizee", url: "http://43.205.231.148/" },
  { image: beemtech, alt: "beemtech", url: "https://beemtech.in/" },
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
            <li><span ><Link to="https://skilltechnologies.in/" target="_blank" className="span-link">Skill Technologies :</Link></span>Independently developed and maintained high-performance applications, contributing to the company's innovative offerings.</li>
            <li><span ><Link to="http://trivedhi.com/" target="_blank" className="span-link">Trivedhi Clerical Solution  :</Link></span>Played a pivotal role in enhancing user interfaces and optimizing performance, delivering a refined user experience for this reputed service provider.</li>
            <li><span ><Link to="https://drseenasdental.com/home/" target="_blank" className="span-link">Drseenas Dental :</Link></span>Collaboratively worked with a team to create a user-friendly, responsive website, significantly improving the online presence of this healthcare provider.</li>
            <li><span ><Link to="http://43.205.231.148/" target="_blank" className="span-link">Servizee :</Link></span>Single-handedly developed core functionalities that power this service-oriented platform, ensuring seamless operations.</li>
            <li><span ><Link to="https://beemtech.in/" target="_blank" className="span-link">Beemtech Infra llp :</Link></span>Developed the front-end for their construction website, delivering a robust and scalable user interface that drives this tech enterprise forward.</li>
          </ul>
        </div>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
