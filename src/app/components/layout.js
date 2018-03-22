import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import $ from 'jquery';
import VisibilitySensor from 'react-visibility-sensor';

import AboutMe from './about-me';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/layout.css';

class Navbar extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
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
  componentWillMount() {
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
      <div>
        <AboutMe />
        <VisibilitySensor>
          {
            ({ isVisible }) =>
              <div>
                {isVisible ? (
                  <div className="navbar">
                    <Navbar />
                  </div>
                ) : (
                    <div className="navbar stickedNavbar">
                      <Navbar />
                    </div>
                  )}
              </div>
          }
        </VisibilitySensor>
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div >
    );
  }
}

export default Layout;
