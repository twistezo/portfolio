import React from 'react'
import NavbarItem from './NavbarItem'
import './Navbar.scss'
import { URL } from './url'

const Navbar: React.FC = () => {
  return (
    <nav className='Navbar'>
      <NavbarItem title='About Me' url={URL.ABOUT_ME}></NavbarItem>
      <NavbarItem title='Skills' url={URL.SKILLS}></NavbarItem>
      <NavbarItem title='Experience' url={URL.EXPERIENCE}></NavbarItem>
      <NavbarItem title='Code Samples' url={URL.CODE_SAMPLES}></NavbarItem>
      <NavbarItem title='References' url={URL.REFERENCES}></NavbarItem>
      <NavbarItem title='Contact' url={URL.CONTACT}></NavbarItem>
    </nav>
  )
}

export default Navbar
