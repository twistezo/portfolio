export enum Theme {
  Light,
  Dark,
}

export interface AppContextProps {
  reactScrollDuration: number
  theme: Theme
}
