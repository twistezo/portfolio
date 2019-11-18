import React, { createContext, useState } from 'react'
import { Theme, AppContextProps } from './types'

const appContextInitialProps: AppContextProps = {
  reactScrollDuration: 500,
  appTheme: Theme.Dark,
  setReactScrollDuration: () => {},
  setAppTheme: () => {},
}

export const AppContext = createContext<AppContextProps>(appContextInitialProps)

const AppContextProvider: React.FC = ({ children }) => {
  const [reactScrollDuration, setReactScrollDuration] = useState<number>(
    appContextInitialProps.reactScrollDuration
  )
  const [appTheme, setAppTheme] = useState<Theme>(appContextInitialProps.appTheme)

  return (
    <AppContext.Provider
      value={{ reactScrollDuration, setReactScrollDuration, appTheme, setAppTheme }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
