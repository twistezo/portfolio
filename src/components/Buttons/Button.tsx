import React, { useContext } from 'react'
import { ButtonType, ReactEl } from './types'
import { AppContext } from '../../contexts/AppContext'
import { Theme } from '../../contexts/types'
import './Button.scss'

interface ButtonProps {
  type: ButtonType
  title: string
  href?: string
  img?: string
  theme?: Theme
  onClickHandler?: Function
}

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  href,
  img,
  theme = Theme.Dark,
  onClickHandler,
}) => {
  const { appTheme, setAppTheme } = useContext(AppContext)

  const buttonTypeName = 'Button__' + ButtonType[type]
  const buttonClassNames =
    'Button ' + buttonTypeName + ' ' + buttonTypeName + '--' + Theme[appTheme]

  const buttonClick = (e: ReactEl) => {
    if (onClickHandler) {
      onClickHandler()
    }

    if (!href) {
      e.preventDefault()
    }

    if (type === ButtonType.ThemeChanger) {
      e.preventDefault()
      setAppTheme(theme)
    }
  }

  return (
    <div className={buttonClassNames}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        className={buttonTypeName + '--link'}
        onClick={e => buttonClick(e)}
      >
        {title}
      </a>
      {img ? <img className={buttonTypeName + '--img'} src={img} alt='button'></img> : ''}
    </div>
  )
}

export default Button
