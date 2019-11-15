import React from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import Button from '../../Buttons/Button'
import { ButtonType } from '../../Buttons/types'

const Skills: React.FC = () => {
  return (
    <SectionContainer childrenName='Skills'>
      <div>Skills</div>
      <Button type={ButtonType.Standard} title='Standard' href=''></Button>
      <Button type={ButtonType.WithImage} title='WithImage' href='' img='a'></Button>
    </SectionContainer>
  )
}

export default Skills
