import React from "react";

import icon3 from "../../public/images/Whoweserve/Media.png";
import mernstack from "../../public/images/team-image/Mernstack.png";
import tool from "../../public/images/team-image/Tool-and-Die-Making.png";
import education from "../../public/images/banner-image/education.png";

const Whoweserve = () => {
  const qualifications = [
    {
      icon: mernstack,
      title: "MERN Stack Development Certification",
      desc: "Completed CCBP NxtWave certification, gaining strong hands-on experience in React.js, modern JavaScript, and component-based frontend development, along with practical exposure to building structured, scalable web applications."
    },
    {
      icon: tool,
      title: "Diploma in Tool & Die Making — NTTF",
      desc: "Earned a diploma in precision engineering and tool design from NTTF, developing expertise in AutoCAD, Siemens NX, manufacturing fundamentals, and engineering design principles, strengthening analytical and problem-solving capabilities."
    },
    {
      icon: icon3,
      title: "SSC (10th Standard) — MJPA School",
      desc: "Completed 10th standard under the SSC board, establishing a strong academic foundation and core learning discipline that supports continuous growth in technical and professional development."
    }
  ];

  return (
    <>
      <section className="solutions-area ptb-80">
        <div className="container">

          {/* Qualification Header */}
          <header className="section-title text-center" id="my-qualification">
            <h2>My Qualification</h2>
            <div className="bar"></div>
            <p className="para-who-we-serve text-secondary">
              A blend of precision engineering education and modern frontend development training, shaping a product-focused UI engineer with strong technical fundamentals and practical development experience.
            </p>
            <p>
              I hold a <strong>Diploma in Tool & Die Making</strong> from NTTF, supported by a <strong>MERN Stack Development Certification</strong> from NxtWave CCBP, where my primary focus and strongest expertise evolved in <strong>frontend engineering using React.js, Next.js, and modern UI development practices</strong>.
            </p>
          </header>

          {/* Qualification Cards */}
          <div className="row justify-content-center g-4">
            {qualifications.map((item, i) => (
              <div key={i} className="col-lg-4 col-sm-6 col-md-6 d-flex">
                <article className="single-solutions-box text-center w-100">
                  <div className="icon mb-3">
                    <img
                      src={item.icon}
                      alt=""
                      width={150}
                      height={150}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="h5 fw-semibold">{item.title}</h3>
                  <p className="text-secondary small mb-0">{item.desc}</p>
                </article>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Whoweserve;
