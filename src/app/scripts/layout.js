import { html, render } from 'lit-html'

import aboutMeHTML from '../components/about-me.html'
import navbarHTML from '../components/navbar.html'
import skillsHTML from '../components/skills.html'
import experienceHTML from '../components/experience.html'
import projectsHTML from '../components/projects.html'
import referencesHTML from '../components/references.html'
import contactHTML from '../components/contact.html'
import footerHTML from '../components/footer.html'
import cookieWarningHTML from '../components/cookie-warning.html'

class Layout {
  constructor() {
    this.AboutMe = html([aboutMeHTML])
    this.Navbar = html([navbarHTML])
    this.Skills = html([skillsHTML])
    this.Experience = html([experienceHTML])
    this.Projects = html([projectsHTML])
    this.References = html([referencesHTML])
    this.Contact = html([contactHTML])
    this.Footer = html([footerHTML])
    this.cookieWarning = html([cookieWarningHTML])
  }

  PageLayout = () => {
    return html`
      <div>
        ${this.cookieWarning}
        <div id="about-me">
          ${this.AboutMe}
        </div>
        ${this.Navbar}
        <div id="skills">
          ${this.Skills}
        </div>
        <div id="experience">
          ${this.Experience}
        </div>
        <div id="projects">
          ${this.Projects}
        </div>
        <div id="references">
          ${this.References}
        </div>
        <div id="contact">
          ${this.Contact}
        </div>
        <div id="footer">
          ${this.Footer}
        </div>
      </div>
    `
  }

  render() {
    render(this.PageLayout(), document.querySelector('#app'))
  }
}

export { Layout as default }
