import React from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import { URL } from '../../Navbar/url'

const CodeSamples: React.FC = () => {
  return (
    <SectionContainer childrenName='CodeSamples' url={URL.CODE_SAMPLES}>
      CodeSamples
    </SectionContainer>
  )
}

export default CodeSamples
