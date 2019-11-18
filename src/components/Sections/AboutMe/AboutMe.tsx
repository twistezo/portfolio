import React from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import ParallaxScene from './ParallaxScene'
import { URL } from '../../Navbar/url'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { ScrambleTexts } from '../../TextScramble/types'
import TextScramble from '../../TextScramble/TextScramble'
import { useTranslation } from 'react-i18next'

const scrambleTexts: ScrambleTexts = [
  'JavaScript developer',
  'Rust developer',
  'Software developer',
  'Łukasz Kółko',
]

const AboutMe: React.FC = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer childrenName='AboutMe' url={URL.ABOUT_ME}>
      <ParallaxScene />
      <div className='AboutMe__foreground'>
        <div className='AboutMe__foreground--container'>
          <div className='AboutMe__text-scramble'>
            <div className='AboutMe__text-scramble--blinker'>_</div>
            <TextScramble texts={scrambleTexts}></TextScramble>
          </div>
          <div className='AboutMe__text-container'>
            <div className='AboutMe__text-container--block'>{t('about-me:info:a')}</div>
            <div className='AboutMe__text-container--block'>{t('about-me:info:b')}</div>
            <div className='AboutMe__text-container--block'>{t('about-me:info:c')}</div>
            <div className='AboutMe__text-container--block'>{t('about-me:info:d')}</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default AboutMe
