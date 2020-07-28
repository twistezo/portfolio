import i18nJSON from '../i18n.json'
import DateCalculator from './date-calculator'

class I18n {
  constructor() {
    this._dateCalculator = new DateCalculator()
    this._Language = Object.freeze({
      PL: 'pl',
      PL_2: 'pl-PL',
      EN: 'en'
    })
    this._currentLanguage = this._Language.EN
  }

  init = () => {
    let browserLanguage = this._getBrowserLanguage()
    if (browserLanguage === this._Language.PL || browserLanguage === this._Language.PL_2) {
      this._currentLanguage = this._Language.PL
    }

    this._initButtonsBehaviour()
    this._setLanguage(this._currentLanguage)
    this.render()
  }

  _getBrowserLanguage = () =>
    navigator.languages != undefined ? navigator.languages[0] : navigator.language

  _setLanguage = chosenLanguage => {
    if (chosenLanguage === 'pl') {
      this._hoverPl()
      this._currentLanguage = this._Language.PL
    } else {
      this._hoverEn()
      this._currentLanguage = this._Language.EN
    }
  }

  render = () => {
    this._dateCalculator.renderWithLocale(this._currentLanguage)

    fetch(i18nJSON)
      .then(response => response.json())
      .then(jsonObj => {
        for (const obj in jsonObj) {
          const fieldName = obj
          const fieldValue = jsonObj[obj][this._currentLanguage]

          switch (fieldName) {
            case 'i18nContact1':
              {
                document
                  .querySelector("input[name='phone']")
                  .setAttribute('placeholder', fieldValue)
              }
              break
            case 'i18nContact2':
              {
                document
                  .querySelector("textarea[name='contents']")
                  .setAttribute('placeholder', fieldValue)
              }
              break
            default: {
              for (let el of document.getElementsByClassName(fieldName)) {
                el.textContent = ''
                el.textContent += fieldValue
              }
            }
          }
        }
      })
  }

  _hoverPl = () => {
    document.querySelector('.i18n-button-en').classList.remove('highlighted')
    document.querySelector('.i18n-button-pl').classList.add('highlighted')
  }

  _hoverEn = () => {
    document.querySelector('.i18n-button-pl').classList.remove('highlighted')
    document.querySelector('.i18n-button-en').classList.add('highlighted')
  }

  _initButtonsBehaviour = () => {
    document.querySelector('.i18n-button-pl').addEventListener('click', e => {
      e.preventDefault()
      this._setLanguage(this._Language.PL)
      this.render()
      this._hoverPl()
    })
    document.querySelector('.i18n-button-en').addEventListener('click', e => {
      e.preventDefault()
      this._setLanguage(this._Language.EN)
      this.render()
      this._hoverEn()
    })
  }
}

export default I18n
