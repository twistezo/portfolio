class DateCalculator {
  constructor() {
    this._todayDate = new Date()
    this._todayDate.setMonth(this._todayDate.getMonth() - 1) // for natural calculations
    this._Locale = {
      Pl: ['miesiąc', 'miesiące', 'miesięcy', 'rok', 'lata', 'lat'],
      En: ['month', 'months', 'months', 'year', 'years', 'years']
    }

    // experience dates
    this._Simteract = {
      from: new Date(2017, 6),
      to: this._todayDate
    }
    this._Freelancer = {
      from: new Date(2017, 0),
      to: new Date(2017, 5)
    }
    this._RedRooster = {
      from: new Date(2014, 6),
      to: new Date(2016, 11)
    }
    this._Wedzony = {
      from: new Date(2014, 0),
      to: new Date(2014, 5)
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
    document.getElementById(
      'exp-simteract-diff'
    ).innerHTML = this.generateDiffWithLang(
      this._Simteract.from,
      this._Simteract.to,
      currentLang
    )
    document.getElementById(
      'exp-freelancer-diff'
    ).innerHTML = this.generateDiffWithLang(
      this._Freelancer.from,
      this._Freelancer.to,
      currentLang
    )
    document.getElementById(
      'exp-redrooster-diff'
    ).innerHTML = this.generateDiffWithLang(
      this._RedRooster.from,
      this._RedRooster.to,
      currentLang
    )
    document.getElementById(
      'exp-wedzony-diff'
    ).innerHTML = this.generateDiffWithLang(
      this._Wedzony.from,
      this._Wedzony.to,
      currentLang
    )
    document.getElementById(
      'total-exp-it'
    ).innerHTML = this.generateDiffWithLang(
      this._Freelancer.from,
      this._Simteract.to,
      currentLang
    )
    document.getElementById(
      'total-exp-cad'
    ).innerHTML = this.generateDiffWithLang(
      this._Wedzony.from,
      this._RedRooster.to,
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
      if (months <= 1) {
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
