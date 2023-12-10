import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from '../img/logo.png';
import navIcon1 from '../img/nav-icon-linkedin.svg';
import navIcon2 from '../img/github-white-cat.png';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Portfolio } from "./Portfolio";
import { Education } from "./Education";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isTogglerClicked, setTogglerClicked] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    // Initialize scrollSpy
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleToggleClick = () => {
    setTogglerClicked(!isTogglerClicked);
  };

  return (
    <Router>
      <Navbar expand={isLargeScreen ? "lg" : ""} className={` ${scrolled ? "scrolled" : ""} ${isTogglerClicked ? "toggler-clicked" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo"/>
            <a className="logo-name" href="#home">Lauren Chow</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} spy={true} smooth={true} duration={500} >Home</Nav.Link>
              <Nav.Link as={Link} to="skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} spy={true} smooth={true} duration={500} >Skills</Nav.Link>
              <Nav.Link as={Link} to="projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} spy={true} smooth={true} duration={500} >Projects</Nav.Link>
              <Nav.Link as={Link} to="portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} spy={true} smooth={true} duration={500} >Portfolio</Nav.Link>
              <Nav.Link as={Link} to="education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} spy={true} smooth={true} duration={500} >Education</Nav.Link>
            </Nav>
            <Row className="align-items-center my-2">
              <Col lg={4} className="order-lg-1 mb-3 mb-lg-0">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/lauren-chow-91439b266/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                  <a className="github-mark" href="https://github.com/lauren2chow" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
                </div>
              </Col>
              <Col lg={4} className="order-lg-2">
                <span className="navbar-text">
                  <a href="mailto:lauren2chow@gmail.com">
                    <button className="vvd"><span>Let’s Connect</span></button>
                  </a>
                </span>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sections */}
      <Element name="home">
        <Banner />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="portfolio">
       <Portfolio />
      </Element>
      <Element name="education">
        <Education />
      </Element>
    </Router>
  );
};
