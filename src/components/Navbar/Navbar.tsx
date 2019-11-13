import React from 'react'
import { Link, Element } from 'react-scroll'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import './navbar.scss'

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__item'>
          <Link to='about-me' spy={true} smooth={true} duration={500} offset={0}>
            About Me
          </Link>
        </div>
        <div className='navbar__item'>
          <Link to='skills' spy={true} smooth={true} duration={500} offset={0}>
            Skills
          </Link>
        </div>
        <div className='navbar__item'>
          <Link to='/experience'>experience</Link>
        </div>
      </nav>

      <Element name='about-me'>
        <AboutMe />
      </Element>
      <Element name='skills'>
        <Skills />
      </Element>
    </div>
  )
}

export default Navbar
