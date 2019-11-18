import React from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import Button from '../../Buttons/Button'
import { ButtonType } from '../../Buttons/types'
import { Theme } from '../../../contexts/types'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
import { URL } from '../../Navbar/url'

const Skills: React.FC = () => {
  const { i18n } = useTranslation()

  return (
    <SectionContainer childrenName='Skills' url={URL.SKILLS}>
      <ScrollAnimation animateIn='bounceInLeft'>
        <div>Skills</div>

        <Button type={ButtonType.Standard} title='Standard' href='https://onet.pl'></Button>

        <Button type={ButtonType.WithImage} title='WithImage' href='' img='a'></Button>

        <Button
          type={ButtonType.ThemeChanger}
          title='ThemeChanger - Light'
          img='a'
          theme={Theme.Light}
        ></Button>

        <Button
          type={ButtonType.ThemeChanger}
          title='ThemeChanger - Dark'
          img='a'
          theme={Theme.Dark}
        ></Button>

        <Button
          type={ButtonType.Standard}
          title='Język polski'
          onClickHandler={() => i18n.changeLanguage('pl')}
        ></Button>
        <Button
          type={ButtonType.Standard}
          title='English language'
          onClickHandler={() => i18n.changeLanguage('en')}
        ></Button>
      </ScrollAnimation>
    </SectionContainer>
  )
}

export default Skills
