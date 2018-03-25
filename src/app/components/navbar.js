import { html } from 'lit-html';

import '../styles/navbar.css';

const Navbar =
    html`
    <div class="navbar stickyNavbar navbar-expand-lg">
        <div>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#about-me">About-me</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#experience">Experience</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
`;

export default Navbar;