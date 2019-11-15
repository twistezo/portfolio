import React from 'react'
import ButtonContainer from '../../containers/ButtonContainer'
import { ButtonType } from './types'

interface ButtonProps {
  type: ButtonType
  title: string
  href: string
  img?: string
}

const Button: React.FC<ButtonProps> = ({ type, title, href, img = '' }) => {
  const buttonTypeName = 'Button__' + ButtonType[type]

  return (
    <ButtonContainer childrenName={buttonTypeName}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        className={buttonTypeName + '--link'}
      >
        {title}
      </a>
      {img ? <img className={buttonTypeName + '--img'} src={img} alt='button'></img> : ''}
    </ButtonContainer>
  )
}

export default Button
