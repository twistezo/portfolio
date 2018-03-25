import { html, render } from 'lit-html';
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
        this.navbar = new Navbar().NavbarComponent();
        const el = document.querySelector('#app');
        render(this.Layout(''), el);
    }

    Layout = () => {
        return html`
        <div>
            <div id="about-me" class="sectionPaddingTop fullHeight aosScrollbarFix">
                ${AboutMe}
            </div>
            ${this.navbar}
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
}
