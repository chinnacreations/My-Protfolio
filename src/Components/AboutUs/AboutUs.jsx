import React from "react";
import { Link } from "react-feather";
import aboutUs from "../../public/images/banner-image/aboutus.png";
import shape1 from "../../public/images/shape1.png";
import shape2 from "../../public/images/shape2.svg";
import shape3 from "../../public/images/shape3.svg";
import shape4 from "../../public/images/shape4.svg";
import shape5 from "../../public/images/shape5.png";

import icon1 from "../../public/images/icon4.png";
import icon2 from "../../public/images/icon5.png";
import icon3 from "../../public/images/icon6.png";
import icon4 from "../../public/images/icon7.png";
const solutions = [
  {
    icon: icon1,
    title: "Frontend Performance Engineering",
    desc: "Engineering high-performance web applications using React and Next.js, with an emphasis on optimized rendering, bundle efficiency, intelligent asset caching, and continuous monitoring and improvement of Core Web Vitals."
  },
  {
    icon: icon2,
    title: "Modern Web Development & R&D",
    desc: "Driving frontend innovation through research and implementation of advanced rendering paradigms (SSR, SSG, ISR), alongside proactive evaluation of emerging frameworks and tooling to build scalable, maintainable, and future-aligned architectures."
  },
  {
    icon: icon3,
    title: "UI/UX — Product-First Engineering",
    desc: "Delivering responsive, accessible, and user-focused digital experiences by leveraging structured design systems, interaction optimization, and usability-driven development to support product goals and enhance user engagement."
  },
  {
    icon: icon4,
    title: "Clean Code, Cloud Deployment & CI/CD",
    desc: "Developing modular, reusable, and well-typed frontend codebases, integrating APIs with reliability and security best practices, and deploying via cloud infrastructure supported by automated CI/CD pipelines for consistent and resilient delivery."
  }
];


const AboutUs = () => {
  return (
    <div >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container" id="about-us">
            <div className="section-title  ">
              <h2 className="">ABOUT ME</h2>
              <div className="bar"></div>
              <p className="para-about-us">
                Results-driven <strong>Frontend Developer</strong> focused on building modern web experiences with <strong>React.js and Next.js</strong>.
                Skilled in creating <strong>high-performance, SEO-friendly, and fully responsive applications</strong>, using an <strong>optimization-first approach</strong> — including fast rendering, code-splitting, caching strategies, image optimization, and reusable component architecture.
                Experienced in improving <strong>Core Web Vitals, load performance, and UI/UX quality</strong>, while delivering smooth interactions and scalable frontend solutions.
                Passionate about <strong>problem-solving, performance engineering, and continuous upskilling</strong> to build impactful and user-centric digital products.
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row g-3">
                  {solutions.map(({ icon, title, desc }, i) => (
                    <div key={i} className="col-6">
                      <article className="single-solutions-box">
                        <div className="icon mb-2">
                          <img src={icon} alt="" width={60} height={60} loading="lazy" />
                        </div>
                        <h3 className="h5">{title}</h3>
                        <p className="text-secondary small mb-0">{desc}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex justify-content-center align-items-start">
                <img
                  src={aboutUs}
                  alt="About our engineering and development approach"
                  className="about-us-image-myprot img-fluid rounded-2"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src={shape1} alt="shape" width={202} height={202} />
      </div>
      <div className="shape2 rotateme">
        <img src={shape2} alt="shape" width={22} height={22} />
      </div>
      <div className="shape3">
        <img src={shape3} alt="shape" width={28} height={28} />
      </div>
      <div className="shape4">
        <img src={shape4} alt="shape" width={21} height={20} />
      </div>
      <div className="shape5">
        <img src={shape5} alt="shape" width={182} height={146} />
      </div>
      <div className="shape6 rotateme">
        <img src={shape4} alt="shape" width={21} height={20} />
      </div>
      <div className="shape7">
        <img src={shape4} alt="shape" width={21} height={20} />
      </div>
      <div className="shape8 rotateme">
        <img src={shape2} alt="shape" width={22} height={22} />
      </div>
    </div>
  );
};

export default AboutUs;
