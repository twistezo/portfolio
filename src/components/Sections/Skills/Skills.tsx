import React from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import { Button, ButtonType } from '../../Buttons'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
import { URL } from '../../Navbar/url'

const Skills: React.FC = () => {
  const { i18n } = useTranslation()

  return (
    <SectionContainer childrenName='Skills' url={URL.SKILLS}>
      <ScrollAnimation animateIn='slideInDown'>
        <div>Skills</div>
      </ScrollAnimation>

      <ScrollAnimation animateIn='slideInLeft'>
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
