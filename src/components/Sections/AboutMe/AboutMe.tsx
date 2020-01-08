import React from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import ParallaxScene from './ParallaxScene'
import { URL } from '../../Navbar/url'
import { ScrambleTexts } from '../../TextScramble/types'
import TextScramble from '../../TextScramble/TextScramble'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from '../../Buttons/'
import IconR2d2 from '../../../images/icon-r2d2.svg'
import IconVader from '../../../images/icon-vader.svg'
import { Theme } from '../../../contexts/types'

const scrambleTexts: ScrambleTexts = [
  'Łukasz Kółko',
  'Rust developer',
  'JavaScript developer',
  'Software developer',
]

const AboutMe: React.FC = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer childrenName='AboutMe' url={URL.ABOUT_ME}>
      <ParallaxScene />
      <div className='AboutMe__foreground'>
        <div className='AboutMe__foreground--text-container'>
          <div className='AboutMe__text-scramble'>
            <div className='AboutMe__text-scramble--blinker'>_</div>
            <TextScramble texts={scrambleTexts}></TextScramble>
          </div>
          <div className='AboutMe__text'>
            <div className='AboutMe__text--block'>{t('about-me:info:a')}</div>
            <div className='AboutMe__text--block'>{t('about-me:info:b')}</div>
            <div className='AboutMe__text--block'>{t('about-me:info:c')}</div>
            <div className='AboutMe__text--block'>{t('about-me:info:d')}</div>
          </div>
        </div>
        <div className='AboutMe__chooser'>
          <div className='AboutMe__chooser--title'>{t('about-me:chooser:a')}</div>
          <div className='AboutMe__chooser--buttons'>
            <Button
              type={ButtonType.ThemeChanger}
              theme={Theme.Light}
              title={t('about-me:chooser:b')}
              img={IconR2d2}
            ></Button>
            <Button
              type={ButtonType.ThemeChanger}
              theme={Theme.Dark}
              title={t('about-me:chooser:c')}
              img={IconVader}
            ></Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default AboutMe
