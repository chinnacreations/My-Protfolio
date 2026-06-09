import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Sparkles, 
  Terminal as TermIcon, 
  ArrowRight
} from "lucide-react";
import shape1 from "../../public/images/shape1.png";
import shape2 from "../../public/images/shape2.svg";
import shape3 from "../../public/images/shape3.svg";
import shape4 from "../../public/images/shape4.svg";
import shape5 from "../../public/images/shape5.png";

import "./AboutUs.css";

const AboutUs = () => {
  // Pillar competencies data
  const pillars = [
    {
      icon: Cpu,
      title: "Performance Engineering",
      desc: "Optimizing render cycles, component memoization, bundle splitting, and smart caching to maintain excellent Core Web Vitals.",
      badge: "Lighthouse 99%",
      score: "99%"
    },
    {
      icon: Layers,
      title: "Modern Architectures",
      desc: "Architecting flexible web portals using React and Next.js, deploying SSR/ISR rendering, and designing reliable state management layers.",
      badge: "React & Next.js",
      score: "95%"
    },
    {
      icon: Sparkles,
      title: "UI/UX Quality",
      desc: "Enriching digital experiences with responsive layout grids, responsive flex layouts, and custom micro-animations with Framer Motion.",
      badge: "Framer & CSS",
      score: "96%"
    },
    {
      icon: TermIcon,
      title: "Clean Delivery & CI/CD",
      desc: "Writing modular, self-documenting code bases, integrating secure REST APIs, and launching with Git-driven cloud setups.",
      badge: "CI/CD & Git",
      score: "92%"
    }
  ];

  return (
    <section className="about-me-section" id="about-us">
      {/* Background Decorative Blur Orbs */}
      <div className="about-glow-orb glow-left"></div>
      <div className="about-glow-orb glow-right"></div>

      <div className="container">
        <div className="row">
          {/* Centered Biography Glass Card */}
          <div className="col-12 col-lg-10 mx-auto mb-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-me-card"
            >
              <div className="about-me-title-area text-center">
                <div className="about-me-subtitle justify-content-center">
                  <span className="about-me-subtitle-line"></span>
                  About Me
                </div>
                <h2 className="about-me-title">
                  Engineering <span>Full Stack</span> Applications
                </h2>
              </div>

              <div className="about-me-narrative">
                <p>
                  Results-driven Full Stack Developer focused on building modern web applications with React, Node.js, and Cloud architectures.
                  Skilled in creating high-performance, SEO-friendly, and fully responsive applications, using an optimization-first approach — including fast rendering, code-splitting, caching strategies, image optimization, and reusable component architecture.
                </p>
                <p>
                  Experienced in improving Core Web Vitals, load performance, and UI/UX quality, while delivering smooth interactions and scalable full stack solutions.
                  Passionate about problem-solving, performance engineering, and continuous upskilling to build impactful and user-centric digital products.
                </p>
              </div>

              {/* Stat Boxes */}
              <div className="about-stats-strip">
                <div className="about-stat-item">
                  <div className="about-stat-num">2+</div>
                  <div className="about-stat-label">Years Exp</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-num">98%</div>
                  <div className="about-stat-label">Perf Score</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-num">13+</div>
                  <div className="about-stat-label">Projects</div>
                </div>
              </div>

              {/* Call to action */}
              <div className="about-cta-container justify-content-center">
                <a href="#contact" className="about-btn-primary">
                  Let's Connect <ArrowRight size={16} />
                </a>
                <a href="#projects" className="about-btn-secondary">
                  View Works
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pillars Grid section at bottom */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="about-me-title-area text-center mb-4">
              <h3 className="h4 font-family-outfit" style={{ letterSpacing: "1px", fontWeight: "700", color: "#ffffff" }}>
                CORE COMPETENCIES & STANDARDS
              </h3>
              <p className="text-secondary small">Engineering solutions designed for speed, beauty, and operational resilience</p>
            </div>
          </div>
          
          <div className="col-12">
            <div className="about-pillars-grid">
              {pillars.map((pillar, pidx) => {
                const IconComp = pillar.icon;
                return (
                  <motion.div
                    key={pidx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: pidx * 0.1 }}
                  >
                    <article className="pillar-card">
                      <div className="pillar-card-header">
                        <div className="pillar-icon-box">
                          <IconComp size={22} />
                        </div>
                        <span className="pillar-badge">{pillar.badge}</span>
                      </div>
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.desc}</p>
                      
                      <div className="pillar-progress-track">
                        <div 
                          className="pillar-progress-bar" 
                          style={{ width: pillar.score }}
                        ></div>
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shape Graphics */}
      <div className="about-shapes">
        <div className="shape-anim shape-float shape1" style={{ top: "10%", left: "5%" }}>
          <img src={shape1} alt="decorative shape" width={90} height={90} />
        </div>
        <div className="shape-anim shape-spin shape2" style={{ top: "25%", right: "8%" }}>
          <img src={shape2} alt="decorative shape" width={22} height={22} />
        </div>
        <div className="shape-anim shape-float shape3" style={{ bottom: "15%", left: "8%" }}>
          <img src={shape3} alt="decorative shape" width={28} height={28} />
        </div>
        <div className="shape-anim shape-spin shape4" style={{ bottom: "5%", right: "12%" }}>
          <img src={shape4} alt="decorative shape" width={21} height={20} />
        </div>
        <div className="shape-anim shape-float shape5" style={{ top: "45%", right: "4%" }}>
          <img src={shape5} alt="decorative shape" width={80} height={64} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
