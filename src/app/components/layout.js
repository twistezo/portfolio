import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import $ from 'jquery';
import AOS from 'aos';

import AboutMe from './about-me';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../../node_modules/aos/dist/aos.css';
import '../styles/layout.css';

class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navbar">
          <div>
            <Link to="#about-me">About-me </Link>
            <Link to="#skills">Skills </Link>
            <Link to="#experience">Experience </Link>
            <Link to="#projects">Projects </Link>
            <Link to="#contact">Contact </Link>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

class Layout extends React.Component {
  componentDidMount() {
    AOS.init();
    this.enableHashSmoothScrolling();
  }

  enableHashSmoothScrolling() {
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }

  render() {
    return (
      <div className="text-center">
        <div id="about-me" className="spaceBetweenSections fullHeight">
          <AboutMe />
        </div>
        <Navbar />
        <div id="skills" className="spaceBetweenSections">
          <Skills />
        </div>
        <div id="experience" className="spaceBetweenSections">
          <Experience />
        </div>
        <div id="projects" className="spaceBetweenSections">
          <Projects />
        </div>
        <div id="contact" className="spaceBetweenSections">
          <Contact />
        </div>
      </div >
    );
  }
}

export default Layout;
