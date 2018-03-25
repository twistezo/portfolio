import { html, render } from 'lit-html';
import $ from 'jquery';
import AOS from 'aos';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './navbar';
import AboutMe from './about-me';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/aos/dist/aos.css';
import '../styles/layout.css';

export default class App {
    constructor() {
        AOS.init();
        enableHashSmoothScrolling();
        const el = document.querySelector('#app');
        render(Layout(''), el);
    }
}

function enableHashSmoothScrolling() {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
}

const Layout = () => {
    return html`
    <div>
        <div id="about-me" class="sectionPaddingTop fullHeight aosScrollbarFix">
            ${AboutMe}
        </div>
        ${Navbar}
        <div id="skills" class="sectionPaddingTop aosScrollbarFix">
            ${Skills}
        </div>
        <div id="experience" class="sectionPaddingTop aosScrollbarFix">
            ${Experience}
        </div>
        <div id="projects" class="sectionPaddingTop aosScrollbarFix">
            ${Projects}
        </div>
        <div id="contact" class="sectionPaddingTop aosScrollbarFix">
            ${Contact}
        </div>
    </div>
  `;
};
