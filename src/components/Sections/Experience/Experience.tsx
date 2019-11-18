import React, { useState } from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import { URL } from '../../Navbar/url'
import TextScramble from '../../TextScramble/TextScramble'
import { ScrambleTexts } from '../../TextScramble/types'

const scrambleTexts: ScrambleTexts = [
  'Łukasz Kółko',
  'Rust developer',
  'JavaScript developer',
  'Software developer',
]

const Experience: React.FC = () => {
  const [pause, setPause] = useState(false)

  return (
    <SectionContainer childrenName='Experience' url={URL.EXPERIENCE}>
      <div
        onClick={() => {
          setPause(!pause)
        }}
      >
        Click to pause TextScramble
      </div>
      <TextScramble texts={scrambleTexts} paused={pause}></TextScramble>
    </SectionContainer>
  )
}

export default Experience
