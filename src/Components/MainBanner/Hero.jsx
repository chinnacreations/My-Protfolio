import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Cpu, Users, Shield, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Style Import
import "./Hero.css";

// Project Image Imports
import personalImg from "../../public/images/banner-image/bannerImage.png";
import cloudInfrastructureImg from "../../public/images/banner-image/dev_cloud_infrastructure.png";
import cyberCodeImg from "../../public/images/banner-image/dev_cyber_code.png";
import interactiveUiImg from "../../public/images/banner-image/dev_interactive_ui.png";

const slides = [
  {
    id: 1,
    label: "About Me",
    title: "Thirumani Satish",
    desc: "A passionate Full Stack Developer with 2+ years of professional experience engineering high-performance, scalable, and user-centric web applications using the MERN Stack and React/Next.js.",
    image: personalImg,
    path: "#about-us",
    category: "FULL STACK ENGINEER",
    benefits: [
      { title: "Robust Architecture", desc: "Building reusable, well-structured, and highly maintainable components." },
      { title: "Full Stack Integration", desc: "Connecting interactive frontends with secure, robust backend APIs." },
      { title: "Optimization First", desc: "Optimizing asset delivery, rendering efficiency, and caching." }
    ],
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Express"],
    goal: "Deliver exceptional products that combine high performance with modern user interfaces."
  },
  {
    id: 2,
    label: "Cloud & Backend",
    title: "Scalable APIs & Database Design",
    desc: "Designing and deploying secure, scalable backend architectures. Experienced in building robust REST endpoints, managing database schema designs, and implementing background tasks.",
    image: cloudInfrastructureImg,
    path: "#my-experience",
    category: "BACKEND ARCHITECTURE",
    benefits: [
      { title: "Database Reliability", desc: "Structuring efficient MongoDB collections with high query performance." },
      { title: "RESTful Microservices", desc: "Developing clean API routes using Node.js, Express, and secure authentication models." },
      { title: "Cloud Automation", desc: "Deploying web services with modern hosting tools and CI/CD pipelines." }
    ],
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "CI/CD"],
    goal: "Develop stable and performant server infrastructures that scale with user growth."
  },
  {
    id: 3,
    label: "Clean Code",
    title: "Clean Code & Optimization",
    desc: "Writing clean, optimized, and developer-friendly codebases. Focused on frontend performance engineering, modular design, and code quality controls.",
    image: cyberCodeImg,
    path: "#skills",
    category: "PERFORMANCE ENGINEERING",
    benefits: [
      { title: "Core Web Vitals", desc: "Improving loading speeds, visual stability (CLS), and input responsiveness (INP)." },
      { title: "Modular Logic", desc: "Designing reusable component libraries that speed up product development." },
      { title: "Modern Ecosystems", desc: "Leveraging clean ES6+ Javascript, type safety, and efficient bundle splitting." }
    ],
    technologies: ["JavaScript", "React.js", "ESLint", "Webpack", "Vercel"],
    goal: "Maintain exceptional code standards that ensure longevity and ease of collaboration."
  },
  {
    id: 4,
    label: "UI & Interaction",
    title: "Interactive Digital Experiences",
    desc: "Creating responsive, smooth, and interactive interfaces. Blending visual excellence with optimized performance to engage users and elevate products.",
    image: interactiveUiImg,
    path: "#projects",
    category: "CREATIVE FRONTEND",
    benefits: [
      { title: "Micro-Animations", desc: "Enriching UX with modern transitions, smooth sliding, and hover feedback." },
      { title: "Aesthetic Layouts", desc: "Applying custom styling, CSS/SCSS structure, and responsive flex/grid displays." },
      { title: "Universal Compatibility", desc: "Ensuring cross-device compatibility from small phones to ultra-wide desktop monitors." }
    ],
    technologies: ["HTML5 / CSS3", "Sass / SCSS", "Bootstrap", "Framer Motion", "UI/UX"],
    goal: "Wow users at first glance with vibrant, alive, and fast-loading web applications."
  }
];

const slideIcons = [Shield, Target, Cpu, Users];

const SLIDE_DURATION = 5000;
const TRANSITION_DURATION = 1.6; // seconds

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const progressRef = useRef(0);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const pauseRef = useRef(isPaused);
  pauseRef.current = isPaused;

  const goTo = useCallback((nextIndex, dir) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(dir);
    setCurrentIndex(nextIndex);
    setProgress(0);
    progressRef.current = 0;
    lastTimeRef.current = null;

    setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION * 1000 + 100);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    goTo((currentIndex + 1) % slides.length, 1);
  }, [currentIndex, goTo]);

  const handlePrev = useCallback(() => {
    goTo((currentIndex - 1 + slides.length) % slides.length, -1);
  }, [currentIndex, goTo]);

  const handleManualSelect = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return;
    const dir = index > currentIndex ? 1 : -1;
    goTo(index, dir);
  }, [currentIndex, goTo, isTransitioning]);

  // RAF-based smooth progress
  useEffect(() => {
    const tick = (timestamp) => {
      if (pauseRef.current) {
        lastTimeRef.current = null;
        animFrameRef.current = requestAnimationFrame(tick);
        return;
      }
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      progressRef.current = Math.min(progressRef.current + (delta / SLIDE_DURATION) * 100, 100);
      setProgress(progressRef.current);

      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setProgress(0);
        lastTimeRef.current = null;
        // Advance slide
        setCurrentIndex((prev) => {
          const next = (prev + 1) % slides.length;
          setDirection(1);
          setIsTransitioning(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, TRANSITION_DURATION * 1000 + 100);
          return next;
        });
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      rotate: dir > 0 ? 55 : -55,
      opacity: 0,
    }),
    center: {
      rotate: 0,
      opacity: 1,
      transition: {
        rotate: { duration: 1.6, ease: [0.8, 0, 0.2, 1] },
        opacity: { duration: 1.6, ease: [0.8, 0, 0.2, 1] },
      },
    },
    exit: (dir) => ({
      rotate: dir > 0 ? -55 : 55,
      opacity: 0,
      transition: {
        rotate: { duration: 1.6, ease: [0.8, 0, 0.2, 1] },
        opacity: { duration: 1.6, ease: [0.8, 0, 0.2, 1] },
      },
    }),
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 40,
      clipPath: "inset(0 0 100% 0)",
    },
    center: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        opacity: { duration: 0.7, delay: 0.3, ease: "easeOut" },
        y: { duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] },
        clipPath: { duration: 0.8, delay: 0.25, ease: [0.33, 1, 0.68, 1] },
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        opacity: { duration: 0.3, ease: "easeIn" },
        y: { duration: 0.3, ease: "easeIn" },
      },
    },
  };

  const currentSlide = slides[currentIndex];

  const handleCtaClick = () => {
    if (currentSlide.path.startsWith("http")) {
      window.open(currentSlide.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(currentSlide.path);
    }
  };

  return (
    <section className="hero-section">
      {/* === BACKGROUND SLIDES === */}
      <div className="hero-bg-slides">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="hero-bg-slide"
            style={{
              willChange: "transform, opacity",
              transformOrigin: "50% 180%",
            }}
          >
            <motion.div
              className="w-full h-full"
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.label}
                className="hero-bg-image"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="hero-overlay"></div>

      {/* === MAIN CONTENT === */}
      <div className="hero-content-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <div className="hero-grid">
              {/* Left Column: Core Info */}
              <div className="hero-left-col">
                {/* Category pill */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  className="hero-category-pill"
                >
                  <motion.div
                    className="hero-category-line"
                    initial={{ width: 0 }}
                    animate={{ width: "36px" }}
                    transition={{ delay: 0.5, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  />
                  <span className="hero-category-text">
                    {currentSlide.category}
                  </span>
                </motion.div>

                {/* Developer Designation Header */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48, duration: 0.7 }}
                  style={{
                    color: '#E6AF06',
                    fontWeight: '800',
                    fontSize: '12px',
                    letterSpacing: '3px',
                    marginBottom: '10px',
                    fontFamily: 'Outfit, sans-serif',
                    textTransform: 'uppercase'
                  }}
                >
                  HI, I'M THIRUMANI SATISH • FULL STACK DEVELOPER
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                  className="hero-title"
                >
                  {currentSlide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.62, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                  className="hero-description"
                >
                  {currentSlide.desc}
                </motion.p>

                {/* CTA */}
                <div className="hero-cta-btn-container">
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleCtaClick}
                    className="hero-cta-btn"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Right Column: Key Benefits and Technologies (Glassmorphic console panel) */}
              <div className="hero-right-col">
                <div className="hero-glass-card">
                  <div>
                    <h4>Key Benefits</h4>
                    <div className="benefits-container">
                      {currentSlide.benefits.map((benefit, i) => (
                        <div key={i} className="benefit-item">
                          <div className="benefit-dot" />
                          <div className="benefit-content">
                            <h5 className="benefit-title">
                              {benefit.title}
                            </h5>
                            <p className="benefit-desc">
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tech-divider">
                    <h4>Core Technologies</h4>
                    <div className="tech-pills-container">
                      {currentSlide.technologies.map((tech, i) => (
                        <span key={i} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {currentSlide.goal && (
                    <div className="goal-container">
                      <Target size={18} className="goal-icon" />
                      <div className="goal-content">
                        <span className="goal-title">
                          The Goal
                        </span>
                        <p className="goal-desc">
                          {currentSlide.goal}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-footer">
          {/* === PLAYBACK CONTROLS === */}
          <div className="playback-controls">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="control-btn"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="control-btn"
            >
              <ChevronRight size={18} />
            </button>

            <div className="control-divider" />

            <button
              onClick={() => setIsPaused((p) => !p)}
              className={`play-pause-toggle ${isPaused ? "active-play" : ""}`}
            >
              {isPaused ? (
                <>
                  <Play size={14} className="control-btn-icon" fill="currentColor" />
                  <span>Play</span>
                </>
              ) : (
                <>
                  <Pause size={14} fill="currentColor" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>

          {/* === SLIDE TABS WITH SEMICIRCULAR TEXT === */}
          <div className="slide-selector-tabs">
            {slides.map((slide, index) => {
              const isActive = currentIndex === index;
              const IconComponent = slideIcons[index];
              return (
                <button
                  key={slide.id}
                  onClick={() => handleManualSelect(index)}
                  disabled={isTransitioning}
                  className="tab-button"
                >
                  <svg viewBox="0 0 200 110">
                    {/* Outer Semicircular Scroll Bar (Track) */}
                    <path
                      d="M 30,75 A 70,70 0 0,1 170,75"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="1.5"
                    />

                    {/* Semicircular Progress Scroll Bar */}
                    <path
                      d="M 30,75 A 70,70 0 0,1 170,75"
                      fill="none"
                      stroke={
                        isActive
                          ? "#00E5FF"
                          : index < currentIndex
                            ? "rgba(255, 255, 255, 0.35)"
                            : "transparent"
                      }
                      strokeWidth={isActive ? "2.5" : "1.5"}
                      strokeLinecap="round"
                      strokeDasharray="219.91"
                      strokeDashoffset={
                        isActive
                          ? 219.91 - (progress / 100) * 219.91
                          : index < currentIndex
                            ? 0
                            : 219.91
                      }
                      style={
                        isActive
                          ? {
                              filter: "drop-shadow(0 0 3px rgba(0, 229, 255, 0.6))",
                              transition: "none",
                            }
                          : {
                              transition: "stroke-dashoffset 300ms ease-out",
                            }
                      }
                    />

                    {/* Straight text below scroll bar */}
                    <text
                      x="100"
                      y="102"
                      textAnchor="middle"
                      className="tab-text"
                      fill={isActive ? "#00E5FF" : "#ffffff"}
                      style={{
                        fontWeight: isActive ? "900" : "700",
                        textShadow: isActive ? "0 0 5px rgba(0, 229, 255, 0.5)" : "none",
                        opacity: isActive ? "1" : "0.6"
                      }}
                    >
                      {slide.label}
                    </text>
                  </svg>

                  {/* Related Icon centered in the semicircle space */}
                  {IconComponent && (
                    <div className="tab-icon-container">
                      <IconComponent
                        size={32}
                        className="tab-icon"
                        style={{
                          color: isActive ? "#00E5FF" : "rgba(255, 255, 255, 0.25)",
                          filter: isActive ? "drop-shadow(0 0 6px rgba(0, 229, 255, 0.6))" : "none"
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* === DECORATIVE SIDE ACCENT === */}
      <div className="decorative-accent" />
    </section>
  );
};

export default Hero;
