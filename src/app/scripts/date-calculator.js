class DateCalculator {
  constructor() {
    this._todayDate = new Date()
    this._todayDate.setMonth(this._todayDate.getMonth() - 1) // for natural calculations
    this._Locale = {
      Pl: ['miesiąc', 'miesiące', 'miesięcy', 'rok', 'lata', 'lat', 'mniej niż'],
      En: ['month', 'months', 'months', 'year', 'years', 'years', 'less than']
    }

    this._company0 = {
      from: new Date(2010, 0),
      to: new Date(2013, 5)
    }
    this._comapany1 = {
      from: new Date(2013, 7),
      to: new Date(2016, 12)
    }
    this._company2 = {
      from: new Date(2017, 0),
      to: this._todayDate
    }
  }

  renderWithLocale = lang => {
    if (lang == 'pl') {
      let currentLang = this._Locale.Pl
      this._render(currentLang)
    } else {
      let currentLang = this._Locale.En
      this._render(currentLang)
    }
  }

  _render = currentLang => {
    for (let i of Array(3).keys()) {
      document.getElementById(`exp-company${i}-diff`).innerHTML = this.generateDiffWithLang(
        this._company0.from,
        this._company0.to,
        currentLang
      )
    }

    document.getElementById('total-exp').innerHTML = this.generateDiffWithLang(
      this._company0.from,
      this._company2.to,
      currentLang
    )
  }

  generateDiffWithLang = (date1, date2, locale) => {
    const diff = Math.ceil(date2.getTime() - date1.getTime())
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    let months = Math.ceil(days / 31) + 1

    let message = ''
    if (months <= 12) {
      message += this._formatMonthsWithLocale(months, locale)
    } else {
      let yearsFromMonths = Math.floor(months / 12)
      let extraMonths = months - yearsFromMonths * 12
      if (yearsFromMonths == 1) {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[3]
        } else {
          message += yearsFromMonths + ' ' + locale[3]
          message += ', ' + this._formatMonthsWithLocale(extraMonths, locale)
        }
      } else if (yearsFromMonths > 1 && yearsFromMonths < 5) {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[4]
        } else {
          message += yearsFromMonths + ' ' + locale[4]
          message += ', ' + this._formatMonthsWithLocale(extraMonths, locale)
        }
      } else {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[5]
        } else {
          message += yearsFromMonths + ' ' + locale[5]
          message += ', ' + this._formatMonthsWithLocale(extraMonths, locale)
        }
      }
    }

    return '(' + message + ')'
  }

  _formatMonthsWithLocale = (months, locale) => {
    let message = ''
    if (months <= 12) {
      if (months < 1) {
        message += locale[6] + ' 1 ' + locale[0]
      } else if (months == 1) {
        message += '1 ' + locale[0]
      } else if (months > 1 && months < 5) {
        message += months + ' ' + locale[1]
      } else if (months >= 5 && months < 12) {
        message += months + ' ' + locale[2]
      } else if (months == 12) {
        message += '1 ' + locale[3]
      }
    }
    return message
  }
}

export default DateCalculator
