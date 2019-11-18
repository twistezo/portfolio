import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { Theme } from '../../contexts/types'
import './Scrollbar.scss'

const Scrollbar: React.FC = () => {
  const { appTheme } = useContext(AppContext)
  const bodyEl = document.getElementsByTagName('body')[0]

  useEffect(() => {
    bodyEl.className += `Scrollbar Scrollbar--${Theme[appTheme]}`
  }, [appTheme])

  return null
}

export default Scrollbar
