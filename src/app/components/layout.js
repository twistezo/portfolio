import React from 'react';
import {
  HashRouter,
  Link,
  withRouter,
  Route,
  BrowserRouter
} from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import AboutMe from './about-me';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

class Navbar extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="fixed-top">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link to="#about-me">About-me</Link>
              </li>
              <li className="nav-item">
                <Link to="#skills">Skills</Link>
              </li>
            </ul>
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
        <Navbar />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div >
    );
  }
}

export default Layout;
