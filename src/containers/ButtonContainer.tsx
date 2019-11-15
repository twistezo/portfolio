import React, { ReactNode } from 'react'
import '../components/Buttons/Button.scss'

interface ButtonContainerProps {
  children: ReactNode
  childrenName: string
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ children, childrenName }) => {
  return <div className={'ButtonContainer ' + childrenName}>{children}</div>
}

export default ButtonContainer
