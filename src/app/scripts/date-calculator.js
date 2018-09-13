class DateCalculator {
  constructor() {
    this.Simteract = {
      from: new Date(2017, 6),
      to: new Date(),
    };
    this.Freelancer = {
      from: new Date(2017, 0),
      to: new Date(2017, 6),
    };
    this.RedRooster = {
      from: new Date(2014, 6),
      to: new Date(2016, 11),
    };
    this.Wedzony = {
      from: new Date(2014, 0),
      to: new Date(2014, 6),
    };
    this.Locale = {
      Pl: ['miesiąc', 'miesiące', 'miesięcy', 'rok', 'lata', 'lat'],
      En: ['month', 'months', 'months', 'year', 'years', 'years']
    }
  }

  init() {
    this.renderWithLocale();
  }

  renderWithLocale(lang) {
    if (lang == 'pl') {
      let currentLang = this.Locale.Pl;
      this.render(currentLang);
    } else {
      let currentLang = this.Locale.En;
      this.render(currentLang);
    }
  }

  render(currentLang) {
    document.getElementById('exp-simteract-diff').innerHTML =
      this.generateDiffWithLang(this.Simteract.from, this.Simteract.to, currentLang);
    document.getElementById('exp-freelancer-diff').innerHTML =
      this.generateDiffWithLang(this.Freelancer.from, this.Freelancer.to, currentLang);
    document.getElementById('exp-redrooster-diff').innerHTML =
      this.generateDiffWithLang(this.RedRooster.from, this.RedRooster.to, currentLang);
    document.getElementById('exp-wedzony-diff').innerHTML =
      this.generateDiffWithLang(this.Wedzony.from, this.Wedzony.to, currentLang);
  }

  generateDiffWithLang(date1, date2, locale) {
    let diff = Math.floor(date2.getTime() - date1.getTime());
    let day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff / day);
    let months = Math.floor(days / 31) + 1; // +1 for adding current month

    let message = '(';
    if (months <= 12) {
      message += this.formatMonthsWithLocale(months, locale);
    } else {
      let yearsFromMonths = Math.floor(months / 12);
      let extraMonths = months - (yearsFromMonths * 12);
      if (yearsFromMonths == 1) {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[3] + ')';
        } else {
          message += yearsFromMonths + ' ' + locale[3];
          message += ', ' + this.formatMonthsWithLocale(extraMonths, locale);
        }
      } else if (yearsFromMonths > 1 && yearsFromMonths < 5) {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[4] + ')';
        } else {
          message += yearsFromMonths + ' ' + locale[4];
          message += ', ' + this.formatMonthsWithLocale(extraMonths, locale);
        }
      } else {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[5] + ')';
        } else {
          message += yearsFromMonths + ' ' + locale[5];
          message += ', ' + this.formatMonthsWithLocale(extraMonths, locale);
        }
      }
    }

    return message
  }

  formatMonthsWithLocale(months, locale) {
    let message = '';
    if (months <= 12) {
      if (months == 1) {
        message += months + ' ' + locale[0] + ')';
      } else if (months > 1 && months < 5) {
        message += months + ' ' + locale[1] + ')';
      } else if (months >= 5 && months < 12) {
        message += months + ' ' + locale[2] + ')';
      } else if (months == 12) {
        message += '1 ' + locale[3] + ')';
      }
    }
    return message;
  }

  setLocale(lang) {
    this.renderWithLocale(lang);
  }
}

export { DateCalculator as default }
