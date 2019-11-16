export enum Theme {
  Light,
  Dark,
}

export interface AppContextProps {
  reactScrollDuration: number
  setReactScrollDuration: Function
  appTheme: Theme
  setAppTheme: Function
}
