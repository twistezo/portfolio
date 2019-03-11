class CookieWarning {
  constructor() {
    this._cookieWarningName = 'cookie-warning'
  }

  init = () => {
    if (this._readCookie(this._cookieWarningName) != 1) {
      this._showCookieWarning()
      this._hideOnClickCookieWarning()
    }
  }

  _readCookie = name => {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  _showCookieWarning = () => {
    document.querySelector('.cookie-warning').classList.remove('hidden')
  }

  _hideOnClickCookieWarning = () => {
    document
      .querySelector('.btn-cookie-warning')
      .addEventListener('click', e => {
        e.preventDefault()
        document
          .querySelector('.cookie-warning')
          .classList.add('roll-out-right')
        this._createCookie(this._cookieWarningName, 1, 30)
      })
  }

  _createCookie = (name, value, days) => {
    var expires = ''
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + value + expires + '; path=/'
  }
}

export default CookieWarning
