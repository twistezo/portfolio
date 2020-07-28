/**
 * Text scramble effect
 *
 * @param {string} domClass - DOM class to inject
 * @param {String[]} sentences - Array of sentences
 * @param {number} symbolChangeTime - Time to switch next random symbol [ms]
 * @param {number} oneLetterTime - Time to finish letter [ms]
 * @param {number} nextDelay - Delay beofre start new sentence [ms]
 */
class TextScramble {
  constructor(domClass, sentences, symbolChangeTime, oneLetterTime, nextDelay) {
    this._symbols = '!<>-_\\/[]{}—=+*^?#'
    this._domClass = domClass
    this._sentences = sentences
    this._symbolChangeTime = symbolChangeTime
    this._oneLetterTime = oneLetterTime
    this._nextDelay = nextDelay
    this._infiniteIterOverTexts()
  }

  async _infiniteIterOverTexts() {
    const el = document.querySelector('.' + this._domClass)
    let currentTextIndex = 0

    // eslint-disable-next-line no-constant-condition
    while (true) {
      let text = this._nextArrayElementInLoop(this._sentences, currentTextIndex)
      currentTextIndex = this._sentences.indexOf(text)

      text.split('').forEach(() => {
        let child = document.createElement('span')
        el.appendChild(child)
      })
      let childs = [...document.querySelectorAll('.' + this._domClass + ' > span')]
      this._drawSentence(text, childs, this._symbolChangeTime, this._oneLetterTime)

      await this._delay(childs.length * this._oneLetterTime + this._nextDelay)
      while (el.firstChild) {
        el.removeChild(el.firstChild)
      }
    }
  }

  /**
   * Get all previously generated spans as `childs`. Every child is a one letter.
   * Run `drawInterval` which fills every child with a random symbol.
   * After some time interval first letter is replaced by finish letter and removed from `childs`.
   * If all letters are replaced and `childs` array is empty, all intervals are stoped.
   *
   * @param {string} text
   * @param {Array} childs
   */
  _drawSentence(text, childs) {
    let currentLetter = 0

    this._drawInterval = setInterval(() => {
      this._fillSpanWithSymbol(childs, text)
    }, this._symbolChangeTime)

    const removeFirstLetterInterval = setInterval(() => {
      childs[0].innerHTML = text[currentLetter]
      currentLetter += 1
      childs.shift()
      if (childs.length === 0) {
        clearInterval(this._drawInterval)
        clearInterval(removeFirstLetterInterval)
      }
    }, this._oneLetterTime)
  }

  _fillSpanWithSymbol = childs => {
    if (childs.length > 0)
      this._randomArrayItem(childs).innerText = this._randomArrayItem(this._symbols)
  }

  _randomArrayItem = array => array[Math.floor(Math.random() * array.length)]

  _nextArrayElementInLoop = (array, currentIndex) => {
    const bound = array.length
    const nextIndex = (currentIndex + bound + bound + 1) % bound
    return array[nextIndex]
  }

  _delay = ms => new Promise(res => setTimeout(res, ms))
}

export default TextScramble
