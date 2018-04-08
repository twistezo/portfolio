import { html, render } from 'lit-html';
import AOS from 'aos';
import Parallax from 'parallax-js';
import Parsley from 'parsleyjs';
import { jarallax } from 'jarallax';
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

import aboutMeHTML from '../components/about-me.html';
import navbarHTML from '../components/navbar.html';
import skillsHTML from '../components/skills.html';
import experienceHTML from '../components/experience.html';
import projectsHTML from '../components/projects.html';
import contactHTML from '../components/contact.html';
import footerHTML from '../components/footer.html';
import cookieWarningHTML from '../components/cookie-warning.html';

const AboutMe = html([aboutMeHTML]);
const Navbar = html([navbarHTML]);
const Skills = html([skillsHTML]);
const Experience = html([experienceHTML]);
const Projects = html([projectsHTML]);
const Contact = html([contactHTML]);
const Footer = html([footerHTML]);
const cookieWarning = html([cookieWarningHTML]);

const Layout = () => {
  return html`
  <div>
    ${cookieWarning}
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

export default class App {
  constructor() {
    AOS.init();
    this.renderLayout();
    this.initSmoothScrolling();
    this.initParallax();
    this.initParsley();
    this.initJarallax();
    this.initCards();
    this.initCookieWarning();
  }

  renderLayout() {
    render(Layout(), document.querySelector('#app'));
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
    $(() => {
      $('#contact-form').parsley().on('field:validated', () => {
        var ok = $('.parsley-error').length === 0;
        $('.parsley-errors-list').toggleClass('vibrate-1', !ok);
        setTimeout(() => $('.parsley-errors-list').removeClass('vibrate-1'), 500);
      });
    });
  }

  initJarallax() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5
    });
  }

  initCards() {
    $(document).ready(() => {
      // force active `all` button on start
      $('.filter-button').filter("[data-filter=all]").addClass('active');

      let cardsCounter = 0;
      $('.filter-button').click(function () {
        let value = $(this).attr('data-filter');
        let width = $(window).width();

        // add animation on button click
        $('.card').addClass('swing-in-top-fwd');
        setTimeout(() => $('.card').removeClass('swing-in-top-fwd'), 500);

        if (value == 'all') {
          $('.filter').show();
          cardsCounter = $('.filter').length;
        }
        else {
          $('.filter').not('.' + value).hide();
          $('.filter').filter('.' + value).show();
          cardsCounter = $('.filter').filter('.' + value).length;
        }

        // change bootstrap cards layout according to cards quantity
        if (cardsCounter <= 3) {
          $('#my-cards').removeClass().addClass('card-deck');
        } else {
          $('#my-cards').removeClass().addClass('card-columns');
        }
        if (width >= 992) {
          if (cardsCounter === 6) {
            $('#my-cards').css('column-count', '').css('column-count', '3');
          } else {
            $('#my-cards').css('column-count', '').css('column-count', '4');
          }
        }

        // force active state on button
        if ($('.filter-button').removeClass('active')) {
          $(this).removeClass('active');
        }
        $(this).addClass('active');
      });
    });
  }

  initCookieWarning() {
    $(document).ready(() => {
      const cookieWarningName = 'cookie-warning';

      if (readCookie(cookieWarningName) != 1) {
        showCookieWarning();
        hideOnClickCookieWarning();
      }

      function hideOnClickCookieWarning() {
        $('.btn-cookie-warning').on('click', () => {
          $('.cookie-warning').addClass('roll-out-right');
          // $('.cookie-warning').addClass('hidden');
          createCookie(cookieWarningName, 1, 30);
        });
      }

      function showCookieWarning() {
        $('.cookie-warning').removeClass('hidden');
      }

      function createCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
      }

      function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
    });
  }
}

