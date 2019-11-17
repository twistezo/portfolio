export type ScrambleText = string

export type ScrambleTexts = ScrambleText[]

export interface TextScrambleProps {
  texts: ScrambleTexts
  letterSpeed?: number
  nextLetterSpeed?: number
  paused?: boolean
  pauseTime?: number
}
