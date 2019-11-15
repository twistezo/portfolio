import React, { createContext } from 'react'
import { Theme, AppContextProps } from './types'

const appContext: AppContextProps = {
  reactScrollDuration: 500,
  theme: Theme.Light,
}

export const AppContext = createContext<AppContextProps>(appContext)

const AppContextProvider: React.FC = ({ children }) => {
  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
}

export default AppContextProvider
