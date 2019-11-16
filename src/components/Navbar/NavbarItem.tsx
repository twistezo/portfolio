import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { AppContext } from '../../contexts/AppContext'

interface NavbarItemProps {
  title: string
  url: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, url }) => {
  const { reactScrollDuration } = useContext(AppContext)

  return (
    <Link
      className='Navbar__item'
      to={url}
      spy={true}
      hashSpy={true}
      smooth={true}
      duration={reactScrollDuration}
      offset={-55}
    >
      {title}
    </Link>
  )
}

export default NavbarItem
