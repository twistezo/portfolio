import React, { useContext, useEffect, useState } from 'react'
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

const Button: React.FC<ButtonProps> = ({ type, title, href, img, theme, onClickHandler }) => {
  const { appTheme, setAppTheme } = useContext(AppContext)
  const [buttonTheme, setButtonTheme] = useState<string>(Theme[Theme.Dark])

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

  useEffect(() => {
    if (ButtonType.ThemeChanger && theme !== undefined) {
      setButtonTheme(Theme[theme])
    } else {
      setButtonTheme(theme ? Theme[theme] : Theme[appTheme])
    }
  })

  const buttonTypeName = `Button__${ButtonType[type]}`

  return (
    <a
      className={`Button ${buttonTypeName} ${buttonTypeName}--${buttonTheme}`}
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      onClick={e => buttonClick(e)}
    >
      {img ? <img className={`${buttonTypeName}--img`} src={img} alt='button'></img> : ''}
      {title}
    </a>
  )
}

export default Button
