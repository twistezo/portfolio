import React, { useState, useEffect } from 'react'
import { TextScrambleProps } from './types'
import { randomItem, nextItem } from '../../utils/array-utils'

const symbols: string[] = '!<>-_\\/[]{}—=+*^?#'.split('')

const TextScramble: React.FC<TextScrambleProps> = ({
  texts,
  letterSpeed = 50,
  nextLetterSpeed = 100,
  paused = false,
  pauseTime = 1000,
}) => {
  const [currentText, setCurrentText] = useState<string>(texts[0])

  const initSymbols: string[] = Array(currentText.length)
    .fill(0)
    .map(() => randomItem(symbols))

  const [displayedText, setDisplayedText] = useState<string[]>(initSymbols)

  const leftIndexes: number[] = []

  const defaultLeftIndexes = (): void => {
    currentText.split('').forEach((_, i) => {
      leftIndexes.push(i)
    })
  }

  let bakeLetterInterval = 0
  let bakeTextInterval = 0

  const bakeLetter = () => {
    bakeLetterInterval = setInterval(() => {
      if (!paused) {
        const updatedText: string[] = []

        currentText.split('').forEach((_, i) => {
          if (!leftIndexes.includes(i)) {
            updatedText[i] = currentText[i]
            return
          }

          const randomSymbol = randomItem(symbols)
          updatedText[i] = randomSymbol
        })

        setDisplayedText(updatedText)
      }
    }, letterSpeed)
  }

  const bakeText = () => {
    defaultLeftIndexes()
    bakeLetter()

    bakeTextInterval = setInterval(() => {
      if (!paused) {
        if (leftIndexes.length === 0) {
          clearInterval(bakeLetterInterval)
          clearInterval(bakeTextInterval)

          setTimeout(() => {
            setCurrentText(nextItem(texts, currentText))
            defaultLeftIndexes()
          }, pauseTime)
        }

        leftIndexes.shift()
      }
    }, nextLetterSpeed)
  }

  useEffect(() => {
    if (!paused) bakeText()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText, paused])

  return <div>{displayedText}</div>
}

export default TextScramble
