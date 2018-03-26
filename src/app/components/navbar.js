import { html } from 'lit-html';

import '../styles/navbar.css';

export default class Navbar {
  constructor() {
    this.smoothScrolling();
  }

  smoothScrolling() {
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }

  NavbarComponent = () => {
    return html`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark stickyNavbar">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarNav" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about-me">O mnie</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Umiejętności</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">Doświadczenie</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projekty</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </nav>
    `;
  }
}
