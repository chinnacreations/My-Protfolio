import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from "swiper/modules";


import naveen from '../../public/images/team-image/Naveen.png'
import RaviDevulapally from '../../public/images/team-image/RaviDevulapally.png'
import SrinivasOsuri from '../../public/images/team-image/SrinivasOsuri.png'

const teamData = [
    {
        name: "Naveen Andey",
        role: "Founder & CEO",
        description: '13+ years in Analytics and DataScience, Startup Fellowship, SLP MBA, FHWS, Germany.',
        imgSrc: naveen,
        link:'https://www.linkedin.com/in/naveenandey?original_referer=https%3A%2F%2Fdatameadows.com%2F',
    },
    {
        name: "Ravi Devulapally",
        role: "Co-Founder",
        imgSrc: RaviDevulapally,
        description: '25+ years in dealing with startups, Mentoring, Innovation MIT Sloan school of Management Previous companies Righlink, Zebi, Mediamint,Wavelas,Zintec.',
        link:'https://www.linkedin.com/in/ravidevulapally',
    },
    {
        name: "Srinivas Osuri (Probono)",
        role: "Business Development",
        imgSrc: SrinivasOsuri,
        description: '11 years in Consulting MBA, INSEAD, ParisMS (Analytics), Carlson Institute of Management Previous companies MuSigma, McKinsey.',
        link:'https://www.linkedin.com/in/srinivas-osuri'
    },
  
];

const Team = () => {

    return (
        <>
            <div className="team-area ptb-80 bg-f9f6f6 container" id="team">
                <div className="container">
                    <div className="section-title "  >
                        <h2>Our Awesome Team</h2>
                        <div className="bar"></div>
                        <p>
                            Unlocking Potential, Delivering Excellence: Together, We Make IT Happen!
                        </p>
                    </div>
                </div>

               <div className="team-center-all">
               <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                    
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                        1500: { slidesPerView: 5 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="team-slider"
                >
                    {teamData.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="single-team">
                                <div className="team-image">
                                    <a href={member.link} target="_blank">
                                    <img
                                        src={member.imgSrc}
                                        alt={`${member.name}`}
                                        className="img-our-team"
                                    />
                                    </a>
                               
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                    <a href={member.link} target="_blank">
                                        <h3>{member.name} </h3>
                                        
                                        </a>
                                        <br />
                                        <span>{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
               </div>
            </div>
        </>
    );
};

export default Team;
