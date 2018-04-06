import { html, render } from 'lit-html';
import AOS from 'aos';
import Parallax from 'parallax-js';
import Parsley from 'parsleyjs';
import 'bootstrap/dist/js/bootstrap.js';
import '../scripts/text-scramble';
import '../scripts/viewport';
import '../scripts/projects';

import aboutMeHTML from '../components/about-me.html';
import navbarHTML from '../components/navbar.html';
import skillsHTML from '../components/skills.html';
import experienceHTML from '../components/experience.html';
import projectsHTML from '../components/projects.html';
import contactHTML from '../components/contact.html';
import footerHTML from '../components/footer.html';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/aos/dist/aos.css';
import '../styles/fontello/css/fontello.css'
import '../styles/media-queries.css';
import '../styles/buttons.css';
import '../styles/scrollbar.css';
import '../styles/layout.css';
import '../styles/about-me.css';
import '../styles/navbar.css';
import '../styles/experience.css';
import '../styles/skills.css';
import '../styles/projects.css';
import '../styles/contact.css';
import '../styles/footer.css';

const AboutMe = html([aboutMeHTML]);
const Navbar = html([navbarHTML]);
const Skills = html([skillsHTML]);
const Experience = html([experienceHTML]);
const Projects = html([projectsHTML]);
const Contact = html([contactHTML]);
const Footer = html([footerHTML]);

export default class App {
  constructor() {
    AOS.init();
    this.smoothScroll();
    this.renderLayout();
    let parallax = new Parallax(document.getElementById('scene'));
    this.disableParallaxWhenScrollDown(parallax);
    this.contactFormOnSubmit();
  }

  smoothScroll() {
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }

  renderLayout() {
    render(this.Layout(), document.querySelector('#app'));
  }

  // for performance reason
  disableParallaxWhenScrollDown(parallax) {
    $(document).on('click', 'a[href="#skills"]', () => {
      parallax.disable();
      setTimeout(() => parallax.enable(), 1000);
    });
  }

  contactFormOnSubmit() {
    $(function () {
      $('#contact-form').parsley().on('field:validated', function () {
        var ok = $('.parsley-error').length === 0;
        $('.parsley-errors-list').toggleClass('vibrate-1', !ok);
        setTimeout(() => $('.parsley-errors-list').removeClass('vibrate-1'), 500);
      });
    });
  }

  Layout = () => {
    return html`
    <div>
      <div id="about-me">
        ${AboutMe}
      </div>
      ${Navbar}
      <div id="skills">
        ${Skills}
      </div>
      <div id="experience">
        ${Experience}
      </div>
      <div id="projects">
        ${Projects}
      </div>
      <div id="contact">
        ${Contact}
      </div>
      <div id="footer">
        ${Footer}
      </div>
    </div>
  `;
  };
}
