import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import logo from "../../public/images/Logo/logo-bg-none.png";

const NavBar = () => {
  const [currentPath, setCurrentPath] = useState("");

  const [menu, setMenu] = React.useState(true);

  const handleScrollToElement = () => {
    const element = document.getElementById("What-We-Do");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header
        id="header"
        className="headroom navbar-color-white navbar-style-four"
      >
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link to="/" className="navbar-brand">
                <img
                  className="logo-image-h-w"
                  src={logo}
                  alt="logo"
                  width={110}
                  height={36}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#about-us"
                      className="nav-link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#my-experience" className="nav-link">
                      My Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href='#projects' className="nav-link">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#skills" className="nav-link">
                      My Skills
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href='#my-qualification' className="nav-link">
                      My Qualification
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/contact/"
                      className={`nav-link ${currentPath == "/contact/" && "active"
                        }`}
                      onClick={() => window.scroll(0, 0)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              {/* <div className="others-option">
                <Link to="/contact/" className="btn btn-primary me-1">
                  Support
                </Link>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
