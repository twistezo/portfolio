import React from 'react'
import NavbarItem from './NavbarItem'
import './Navbar.scss'

const Navbar: React.FC = () => {
  return (
    <nav className='Navbar'>
      <NavbarItem title='About Me' componentName='AboutMe'></NavbarItem>
      <NavbarItem title='Skills' componentName='Skills'></NavbarItem>
      <NavbarItem title='Experience' componentName='Experience'></NavbarItem>
      <NavbarItem title='Code Samples' componentName='CodeSamples'></NavbarItem>
      <NavbarItem title='References' componentName='References'></NavbarItem>
      <NavbarItem title='Contact' componentName='Contact'></NavbarItem>
    </nav>
  )
}

export default Navbar
