import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import bookSelf from "../../public/images/services-right-image/book-self.png";
import box from "../../public/images/services-right-image/box.png";
import chair from "../../public/images/services-right-image/chair.png";
import cloud from "../../public/images/services-right-image/cloud.png";
import cup from "../../public/images/services-right-image/cup.png";
import flowerTop from "../../public/images/services-right-image/flower-top.png";
import headPhone from "../../public/images/services-right-image/head-phone.png";
import monitor from "../../public/images/services-right-image/monitor.png";
import mug from "../../public/images/services-right-image/mug.png";
import table from "../../public/images/services-right-image/table.png";
import tissue from "../../public/images/services-right-image/tissue.png";
import waterBottle from "../../public/images/services-right-image/water-bottle.png";
import wifi from "../../public/images/services-right-image/wifi.png";
import cercleShape from "../../public/images/services-right-image/cercle-shape.png";
import serviceRightMainPic from "../../public/images/services-right-image/service-right-main-pic.png";
import { LiaPlaneSolid } from "react-icons/lia";
import { GiCartwheel } from "react-icons/gi";
import { SiAutocad } from "react-icons/si";

const OurServices = () => {
  const calculateITExperience = () => {
    const startDate = new Date("2023-8-01"); // IT start
    const currentDate = new Date();

    const diffInMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());

    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    return `${years} Years ${months} Months`;
  };

  return (
    <>
      <div className="services-area bg-f7fafd">
        <div className="container">
          <div
            id="my-experience"
            className="row justify-content-center align-items-center"
          >
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>MY EXPERIENCE {" "}<strong>{calculateITExperience()}</strong> </h2>
                <div className="bar"></div>
                <p>
                  I am a passionate IT professional specializing in Front-End and Web
                  Application Development. My experience focuses on building scalable,
                  high-performance applications using React.js, Next.js, and modern UI
                  frameworks. I excel in API integration, performance optimization, and
                  delivering clean, user-centric solutions that align with real-world
                  business requirements.
                </p>

              </div>

              <Timeline position="alternate">

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Mar-2025 - Present
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      <Link
                        to="/my-experience-galaxy"
                        className="learn-more-btn"
                        onClick={() => window.scroll(0, 0)}
                      >
                        Galaxy Tech Solutions
                      </Link>
                    </Typography>
                    <Typography>Front-End Developer</Typography>
                  </TimelineContent>
                </TimelineItem>


                {/* Skill Technologies – IT */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Aug-2023 - Feb-2025
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      <Link
                        to="/my-experience-4"
                        className="learn-more-btn"
                        onClick={() => window.scroll(0, 0)}
                      >
                        Skill Technologies
                      </Link>
                    </Typography>
                    <Typography>Associate Software Developer</Typography>
                  </TimelineContent>
                </TimelineItem>

                {/* SaiRam Designs – Tech */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    Feb-2023 - Aug-2023
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <SiAutocad size={25} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "10px", px: 2 }}>
                    <Typography variant="h6" component="span" style={{ fontSize: "18px" }}>
                      <Link
                        to="/my-experience-3"
                        className="learn-more-btn"
                        onClick={() => window.scroll(0, 0)}
                      >
                        SaiRam Designs & Drafting
                      </Link>
                    </Typography>
                    <Typography>Autocad Designer</Typography>
                  </TimelineContent>
                </TimelineItem>

                {/* Rockman Industries */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Nov-2019 - Aug-2022
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <GiCartwheel size={25} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      <Link
                        to="/my-experience-2"
                        className="learn-more-btn"
                        onClick={() => window.scroll(0, 0)}
                      >
                        Rockman Industries Ltd.
                      </Link>
                    </Typography>
                    <Typography>Assistant Engineer</Typography>
                  </TimelineContent>
                </TimelineItem>

                {/* Vem Technologies – Oldest */}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    Aug-2018 - Nov-2019
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <LiaPlaneSolid size={25} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      <Link
                        to="/my-experience-1"
                        className="learn-more-btn"
                        onClick={() => window.scroll(0, 0)}
                      >
                        Vem Technologies
                      </Link>
                    </Typography>
                    <Typography>Graduate Trainee</Typography>
                  </TimelineContent>
                </TimelineItem>

              </Timeline>

            </div>

            <div className="col-lg-6 col-md-12 services-right-image">
              <img
                src={bookSelf}
                alt="book-self"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
                width={139}
                height={139}
              />

              <img
                src={box}
                alt="box"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-once="true"
                width={420}
                height={251}
              />

              <img
                src={chair}
                alt="chair"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
                width={67}
                height={127}
              />

              <img
                src={cloud}
                alt="cloud"
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="500"
                data-aos-once="true"
                width={158}
                height={140}
              />

              <img
                src={cup}
                alt="cup"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
                width={82}
                height={93}
              />

              <img
                src={flowerTop}
                alt="flower"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="500"
                data-aos-once="true"
                width={27}
                height={78}
              />

              <img
                src={headPhone}
                alt="head-phone"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
                width={30}
                height={29}
              />

              <img
                src={monitor}
                alt="monitor"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="500"
                data-aos-once="true"
                width={70}
                height={99}
              />

              <img
                src={mug}
                alt="mug"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                data-aos-once="true"
                width={16}
                height={20}
              />

              <img
                src={table}
                alt="table"
                data-aos="fade-up"
                data-aos-delay="550"
                data-aos-duration="500"
                data-aos-once="true"
                width={162}
                height={149}
              />

              <img
                src={tissue}
                alt="tissue"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="500"
                data-aos-once="true"
                width={26}
                height={42}
              />

              <img
                src={waterBottle}
                alt="water-bottle"
                data-aos="fade-up"
                data-aos-delay="650"
                data-aos-duration="500"
                data-aos-once="true"
                width={14}
                height={37}
              />

              <img
                src={wifi}
                alt="wifi"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="500"
                data-aos-once="true"
                width={55}
                height={71}
              />

              <img
                src={cercleShape}
                className="bg-image rotateme"
                alt="shape"
                data-aos="fade-up"
                data-aos-delay="750"
                data-aos-duration="500"
                data-aos-once="true"
                width={524}
                height={518}
              />

              <img
                src={serviceRightMainPic}
                alt="main-pic"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="500"
                data-aos-once="true"
                width={342}
                height={396}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
