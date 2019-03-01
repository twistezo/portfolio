class CookieWarning {
  constructor() {
    this.cookieWarningName = 'cookie-warning'
  }

  init() {
    if (this.readCookie(this.cookieWarningName) != 1) {
      this.showCookieWarning()
      this.hideOnClickCookieWarning()
    }
  }

  readCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  showCookieWarning() {
    $('.cookie-warning').removeClass('hidden')
  }

  hideOnClickCookieWarning() {
    $('.btn-cookie-warning').on('click', () => {
      $('.cookie-warning').addClass('roll-out-right')
      this.createCookie(this.cookieWarningName, 1, 30)
    })
  }

  createCookie(name, value, days) {
    var expires = ''
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + value + expires + '; path=/'
  }
}

export { CookieWarning as default }
