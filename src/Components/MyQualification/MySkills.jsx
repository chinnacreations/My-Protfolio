import React from "react";
import cercleShape from "../../public/images/services-left-image/cercle-shape.png";
import whyChooseUsImg from "../../public/images/why-choose-us-image/main-static.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoRocketOutline, IoDiamondOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";

const Ourvalues = () => {
  const features = [
    {
      icon: <FaPeopleGroup size={50} />,
      title: "Frontend Core Engineering",
      desc: "Specializing in JavaScript (ES6+), TypeScript, and component-based UI development using React and Next.js. Experienced in building reusable, high-performance frontend modules that support scalability and maintainability."
    },
    {
      icon: <IoRocketOutline size={50} />,
      title: "Product Contributions & Portfolio",
      desc: "Delivering production-grade user interfaces with ownership over performance optimization, API integration, and R&D-driven UI engineering. GitHub: github.com/chinnacreations | Key Projects: Servizee, Skill Technologies, Jobby Portal, NXT-WATCH UI."
    },
    {
      icon: <GoShieldCheck size={50} />,
      title: "Engineering Growth & R&D",
      desc: "Committed to continuous learning in frontend performance, UI architecture, and emerging rendering models. Actively involved in Meta API R&D, bulk messaging automation, payment gateway integrations, and ad-management UI platforms."
    },
    {
      icon: <IoDiamondOutline size={50} />,
      title: "Product Requirement Analysis",
      desc: "Translating business and product requirements into structured frontend solutions by evaluating UX impact, technical scope, performance considerations, and implementation feasibility for informed engineering decisions."
    },
    {
      icon: <CiBookmarkCheck size={50} />,
      title: "Performance & Technical Validation",
      desc: "Conducting frontend feasibility analysis including PoC development, framework evaluation, API capability assessment, and performance benchmarking to ensure architecture alignment and optimized execution."
    },
    {
      icon: <FaBusinessTime size={50} />,
      title: "Scalable UI Delivery & CI/CD",
      desc: "Executing high-impact UI features using React hooks and Next.js (SSR, SSG, ISR), deploying through automated CI/CD pipelines on cloud infrastructure for consistent, reliable, and performance-driven product delivery."
    }
  ];

  return (
    <>
      <section className="why-choose-us ptb-80 pt-0">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT SECTION */}
            <div className="col-lg-6 col-md-12">
              <header className="section-title" id="skills">
                <h2>Dynamic Skills & Product Engineering</h2>
                <div className="bar"></div>
                <p className="text-secondary">
                  Front-End Developer focused on performance-driven UI, scalable architecture, and product-aligned frontend engineering excellence.
                </p>
                <p>
                  Results-driven Front-End Developer with deep expertise in <strong>React.js, Next.js, JavaScript (ES6+)</strong> and modern UI engineering using <strong>Tailwind CSS, Bootstrap, and reusable component architectures</strong>.
                  Currently working at <strong>Galaxy Tech Solutions</strong>, contributing to high-impact digital products including <strong>PlotNetwork.in, ESG Bureau, Bulkly, Buziness.ai, Buziness.ai Ads Platform,</strong> and <strong>Shri Aaum Application</strong>.
                  Experienced in <strong>REST API integration, frontend performance optimization, payment gateways, automation R&D, and CI/CD cloud deployments</strong>, while maintaining a strong product-first engineering mindset.
                </p>
              </header>

              <figure className="why-choose-us-image">
                <img
                  src={cercleShape}
                  className="rotateme animate-cercle-img"
                  alt="decorative rotating shape"
                  width={524}
                  height={518}
                  loading="lazy"
                />
                <img
                  src={whyChooseUsImg}
                  alt="frontend engineering showcase"
                  width={379}
                  height={416}
                  loading="lazy"
                />
              </figure>
            </div>

            {/* RIGHT SECTION - FEATURE CARDS */}
            <div className="col-lg-6 col-md-12">
              <div className="row g-4">
                {features.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                    <div className="single-why-choose-us h-100">
                      <div className="icon mb-2">{item.icon}</div>
                      <h3 className="h5">{item.title}</h3>
                      <p className="text-secondary small mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Ourvalues;
