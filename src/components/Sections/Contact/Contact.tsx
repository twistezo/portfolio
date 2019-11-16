import React from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import { URL } from '../../Navbar/url'

const Contact: React.FC = () => {
  return (
    <SectionContainer childrenName='Contact' url={URL.CONTACT}>
      Contact
    </SectionContainer>
  )
}

export default Contact
