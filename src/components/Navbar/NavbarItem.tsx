import React from 'react'
import { Link } from 'react-scroll'

interface NavbarItemProps {
  title: string
  componentName: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, componentName }) => {
  return (
    <Link
      className='Navbar__item'
      to={componentName}
      spy={true}
      smooth={true}
      duration={500}
      offset={-55}
    >
      {title}
    </Link>
  )
}

export default NavbarItem
