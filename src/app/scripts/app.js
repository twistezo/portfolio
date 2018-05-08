import AOS from 'aos';
import Layout from '../scripts/layout';
import Parallax from 'parallax-js';
import Parsley from 'parsleyjs';
import { jarallax } from 'jarallax';
import I18n from '../scripts/languages';
import ProjectsCards from '../scripts/projects-cards';
import CookieWarning from '../scripts/cookie-warning';
import 'bootstrap/dist/js/bootstrap.js';
import '../scripts/text-scramble';

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
import '../styles/cookie-warning.css';

export default class App {
  run() {
    AOS.init();
    new Layout().render();
    this.initSmoothScrolling();
    this.initParallax();
    this.initParsley();
    this.initJarallax();
    new I18n().init();
    new ProjectsCards().init();
    new CookieWarning().init();
  }

  initSmoothScrolling() {
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }

  initParallax() {
    let parallax = new Parallax(document.getElementById('scene'));
    this.disableParallaxWhenScrollingDown(parallax); // performance reason
  }

  disableParallaxWhenScrollingDown(parallax) {
    $(document).on('click', 'a[href="#skills"]', () => {
      parallax.disable();
      setTimeout(() => parallax.enable(), 1000);
    });
  }

  initParsley() {
    $('#contact-form').parsley().on('field:validated', () => {
      var ok = $('.parsley-error').length === 0;
      $('.parsley-errors-list').toggleClass('vibrate-1', !ok);
      setTimeout(() => $('.parsley-errors-list').removeClass('vibrate-1'), 500);
    });
  }

  initJarallax() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5
    });
  }
}

