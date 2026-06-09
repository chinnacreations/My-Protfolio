import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Cpu,
  Smartphone,
  Layers,
  Server,
  Sparkles,
  Cloud,
  Brain,
  ArrowRight
} from "lucide-react";
import "./MySkills.css";

const skillsList = [
  {
    name: "React.js & Next.js",
    path: "/contact",
    desc: "Developing fast, SEO-optimized, and responsive web applications using React and Next.js (SSR, ISR, and SSG).",
    iconName: "Code",
    color: "#10B981", // Emerald green
    category: "Frontend"
  },
  {
    name: "JS & TypeScript",
    path: "/contact",
    desc: "Writing clean, modular, and reusable front-end logic using ES6+ JavaScript and statically typed TypeScript.",
    iconName: "Cpu",
    color: "#FFC107", // Amber
    category: "Languages"
  },
  {
    name: "Responsive UI Design",
    path: "/contact",
    desc: "Crafting beautiful interfaces and fluid layouts using Tailwind CSS, Bootstrap, CSS grids, and modern design systems.",
    iconName: "Smartphone",
    color: "#EC4899", // Pink
    category: "Styling"
  },
  {
    name: "State Management",
    path: "/contact",
    desc: "Managing complex global client application state efficiently with Redux Toolkit, Context API, and custom hooks.",
    iconName: "Layers",
    color: "#8B5CF6", // Purple
    category: "Data Flow"
  },
  {
    name: "API & Payments",
    path: "/contact",
    desc: "Integrating RESTful / GraphQL APIs, real-time WebSockets, and secure third-party payment gateways like Stripe and Razorpay.",
    iconName: "Server",
    color: "#3B82F6", // Tech Blue
    category: "Integrations"
  },
  {
    name: "Performance & SEO",
    path: "/contact",
    desc: "Boosting Core Web Vitals, page speed, code splitting, lazy loading, and implementing Google Search Console.",
    iconName: "Sparkles",
    color: "#06B6D4", // Cyan
    category: "Optimization"
  },
  {
    name: "CI/CD & Cloud",
    path: "/contact",
    desc: "Automating deployment pipelines and cloud infrastructure settings via Git, Vercel, Netlify, and Firebase.",
    iconName: "Cloud",
    color: "#00A1E0", // Cloud Blue
    category: "Deployments"
  },
  {
    name: "Product R&D & UX",
    path: "/contact",
    desc: "Analyzing design specifications, creating rapid interactive PoCs, and evaluating UX feasibility for alignment.",
    iconName: "Brain",
    color: "#EF4444", // Red
    category: "Strategy"
  }
];

const getSkillIcon = (iconName) => {
  const map = {
    Code,
    Cpu,
    Smartphone,
    Layers,
    Server,
    Sparkles,
    Cloud,
    Brain
  };
  const IconComp = map[iconName];
  return IconComp || Code;
};

export default function Ourvalues() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [radius, setRadius] = useState(390);

  // Responsive scaling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(190);
      } else if (window.innerWidth < 1024) {
        setRadius(290);
      } else {
        setRadius(390);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rotateTo = (index) => {
    const N = skillsList.length;
    if (N === 0) return;
    const anglePerItem = 360 / N;
    const targetAngle = -index * anglePerItem;
    
    setCurrentRotation((curRot) => {
      const diff = ((targetAngle - curRot + 180) % 360 + 360) % 360 - 180;
      return curRot + diff;
    });
    setActiveIndex(index);
  };

  // Auto-scrolling interval
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      const N = skillsList.length;
      if (N === 0) return;
      const nextIndex = (activeIndex + 1) % N;
      rotateTo(nextIndex);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartRotation(currentRotation);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const sensitivity = window.innerWidth < 768 ? 0.55 : 0.4;
    setCurrentRotation(startRotation + deltaX * sensitivity);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapCarousel();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartRotation(currentRotation);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = window.innerWidth < 768 ? 0.55 : 0.4;
    setCurrentRotation(startRotation + deltaX * sensitivity);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapCarousel();
  };

  const snapCarousel = () => {
    const N = skillsList.length;
    if (N === 0) return;
    const anglePerItem = 360 / N;
    setCurrentRotation((curRot) => {
      const rawIndex = -curRot / anglePerItem;
      let snappedIndex = Math.round(rawIndex) % N;
      if (snappedIndex < 0) snappedIndex += N;
      setActiveIndex(snappedIndex);
      
      const targetAngle = -snappedIndex * anglePerItem;
      const diff = ((targetAngle - curRot + 180) % 360 + 360) % 360 - 180;
      return curRot + diff;
    });
  };

  const handleCardClick = (idx, item) => {
    if (activeIndex === idx) {
      navigate(item.path);
    } else {
      rotateTo(idx);
    }
  };

  const activeSkill = skillsList[activeIndex];

  return (
    <section className="skills-console-section" id="skills">
      {/* Cyber Grid Floor Underlay */}
      <div className="cyber-grid-floor" />

      {/* Dynamic Central Ambient Glow */}
      <div 
        className="ambient-glow"
        style={{
          background: `radial-gradient(circle, ${activeSkill.color} 0%, transparent 70%)`
        }}
      />

      <div className="container">
        
        {/* SECTION HEADER */}
        <header className="section-header">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#ffc107]">
              SKILLS HUB
            </span>
          </div>
          <h2>Dynamic Skills & <span>Product Engineering</span></h2>
          <div className="bar"></div>
          <p>
            Full Stack Developer focused on performance-driven UI, scalable backend architecture, and 
            product-aligned web engineering excellence. Drag the command console to rotate or click a node to reveal details.
          </p>
        </header>

        {/* 3D HOLOGRAPHIC CAROUSEL CONSOLE */}
        <div 
          className="skills-console-viewport"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Connecting SVG Lines */}
          <svg className="connector-svg-container" viewBox="0 0 980 980">
            {/* Core Orbit rings on floor */}
            <ellipse 
              cx="490" 
              cy="490" 
              rx="80" 
              ry={57.6} 
              stroke={activeSkill.color} 
              strokeWidth="1" 
              fill="none" 
              className="opacity-30 transition-colors duration-700" 
            />
            <ellipse 
              cx="490" 
              cy="490" 
              rx="95" 
              ry={68.4} 
              stroke={activeSkill.color} 
              strokeWidth="1" 
              strokeDasharray="5 5" 
              fill="none" 
              className="opacity-20 transition-colors duration-700" 
            />
            <ellipse 
              cx="490" 
              cy="490" 
              rx={radius} 
              ry={radius * 0.72} 
              stroke="rgba(255,255,255,0.02)" 
              strokeWidth="1" 
              fill="none" 
            />
            
            {/* Animated Laser Rays */}
            {skillsList.map((item, idx) => {
              const angle = idx * (360 / skillsList.length);
              const theta = angle + currentRotation;
              const thetaRad = (theta * Math.PI) / 180;
              
              const targetX = radius * Math.sin(thetaRad);
              const targetY = (radius * 0.72) * Math.cos(thetaRad);

              const x = 490 + targetX;
              const y = 490 + targetY;

              const cosVal = Math.cos(thetaRad);
              const lineOpacity = 0.2 + 0.6 * (cosVal + 1) / 2;
              const isItemActive = idx === activeIndex;

              return (
                <g key={idx}>
                  {/* Glowing Laser */}
                  <line
                    x1="490"
                    y1="490"
                    x2={x}
                    y2={y}
                    stroke={item.color}
                    strokeWidth="1.5"
                    className="animate-laser-pulse laser-line-glowing"
                    style={{ opacity: isItemActive ? lineOpacity * 0.5 : lineOpacity * 0.15 }}
                  />
                  {/* Main Line */}
                  <line
                    x1="490"
                    y1="490"
                    x2={x}
                    y2={y}
                    stroke={item.color}
                    strokeWidth="0.8"
                    className="laser-line-main"
                    style={{ opacity: isItemActive ? lineOpacity * 0.8 : lineOpacity * 0.4 }}
                  />
                  {/* Pulsating Event Stream */}
                  {isItemActive && (
                    <line
                      x1="490"
                      y1="490"
                      x2={x}
                      y2={y}
                      strokeLinecap="round"
                      className="data-flow-line"
                      style={{
                        animationDuration: '1.5s',
                        stroke: item.color,
                        filter: `drop-shadow(0 0 4px ${item.color})`,
                        opacity: lineOpacity
                      }}
                    />
                  )}
                  {/* Connecting Joint Node */}
                  <circle cx={x} cy={y} r="2.5" fill={item.color} style={{ opacity: lineOpacity }} />
                </g>
              );
            })}
          </svg>

          {/* Central Console Core */}
          <div className="central-hub">
            <div 
              className="hub-ring-dashed"
              style={{ borderColor: activeSkill.color }}
            />
            <div 
              className="hub-ring-double"
              style={{ borderColor: activeSkill.color }}
            />
            
            {/* Glowing Uplink Pillar */}
            <div 
              className="hub-uplink-pillar"
              style={{
                background: `linear-gradient(to top, ${activeSkill.color}, transparent)`,
              }}
            />

            {/* Hub Badge */}
            <div className="hub-badge-wrapper">
              <div 
                className="hub-orbit-hud"
                style={{ borderColor: `${activeSkill.color}50` }}
              />
              <div 
                className="hub-dotted-hud"
                style={{ borderColor: `${activeSkill.color}30` }}
              />

              {/* Central Core Display */}
              <div 
                className="hub-core-display animate-brain-pulse"
                style={{
                  borderColor: `${activeSkill.color}50`,
                  boxShadow: `0 8px 32px ${activeSkill.color}25`
                }}
              >
                <span className="hub-core-title">
                  CHINNA
                </span>
                <span className="hub-core-sub">
                  CREATIONS
                </span>
              </div>

              {/* Floating HUD status indicator tags */}
              <div className="hub-status-tag tag-top">
                NODE // {String(activeIndex + 1).padStart(2, "0")}
              </div>
              <div className="hub-status-tag tag-bottom">
                SYS: ACTIVE
              </div>
            </div>
          </div>

          {/* 3D Rotating Service Cards */}
          {skillsList.map((item, idx) => {
            const angle = idx * (360 / skillsList.length);
            const theta = angle + currentRotation;
            const thetaRad = (theta * Math.PI) / 180;
            const isActive = idx === activeIndex;
            const IconComp = getSkillIcon(item.iconName);

            // Elliptical coordinate math
            const targetX = radius * Math.sin(thetaRad);
            const targetY = (radius * 0.72) * Math.cos(thetaRad);

            // Depth calculation variables
            const cosVal = Math.cos(thetaRad);
            const scale = 0.78 + 0.22 * cosVal;
            const opacity = 0.45 + 0.55 * (cosVal + 1) / 2;
            const zIndex = isActive ? 300 : Math.round((cosVal + 1) * 100);

            // Card rotation offsets
            const cardRotY = -targetX * 0.045;
            const cardRotX = -5;

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx, item)}
                className={`skill-card-3d ${isActive ? "active" : ""}`}
                style={{
                  borderColor: isActive ? `${item.color}cc` : 'rgba(255,255,255,0.05)',
                  '--card-color': item.color,
                  '--card-glow-color': `${item.color}25`,
                  transform: `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${scale}) rotateY(${cardRotY}deg) rotateX(${cardRotX}deg)`,
                  zIndex: zIndex,
                  opacity: opacity,
                  backgroundColor: isActive ? 'rgba(11, 19, 41, 0.96)' : 'rgba(11, 19, 41, 0.65)',
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s, border 0.5s'
                }}
              >
                <div 
                  className="skill-card-glow-strip"
                  style={{ 
                    backgroundColor: item.color,
                    opacity: isActive ? 1 : 0 
                  }}
                />

                <div className="skill-card-3d-header">
                  <div className="card-node-index">
                    SKILL // {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div 
                    className="card-icon-container"
                    style={{
                      backgroundColor: isActive ? `${item.color}20` : 'rgba(255,255,255,0.02)',
                      color: isActive ? item.color : '#64748B'
                    }}
                  >
                    <IconComp size={isActive ? 20 : 18} />
                  </div>
                </div>

                <h3>{item.name}</h3>

                <p>{item.desc}</p>

                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.path);
                  }}
                  className="skill-card-link"
                  style={{ color: item.color }}
                >
                  Configure System
                  <ArrowRight size={12} />
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
