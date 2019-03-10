import AOS from 'aos'
import Layout from '../scripts/layout'
import Parallax from 'parallax-js'
import { jarallax } from 'jarallax'
import DateCalculator from '../scripts/date-calculator'
import I18n from '../scripts/i18n'
import Projects from '../scripts/projects'
import CookieWarning from '../scripts/cookie-warning'
import 'parsleyjs'
import 'bootstrap/dist/js/bootstrap.js'
import '../scripts/text-scramble'
import '../styles/_layout.scss'

export default class App {
  run() {
    AOS.init()
    new Layout().render()
    this.initSmoothScrolling()
    this.initParallax()
    this.initParsley()
    this.initJarallax()
    this.initHideNavMenuOnCLickOnMobile()
    let dateCalculator = new DateCalculator()
    dateCalculator.init()
    new I18n(dateCalculator).init()
    new Projects().init()
    new CookieWarning().init()
  }

  initSmoothScrolling() {
    $(document).on('click', 'a[href^="#"]', function(event) {
      event.preventDefault()
      if (App.isMobileView()) {
        $('html, body').animate(
          {
            scrollTop: $($.attr(this, 'href')).offset().top - 220
          },
          500
        )
      } else {
        $('html, body').animate(
          {
            scrollTop: $($.attr(this, 'href')).offset().top
          },
          500
        )
      }
    })
  }

  initParallax() {
    let parallax = new Parallax(document.getElementById('scene'))
    this.disableParallaxWhenScrollingDown(parallax) // performance reason
  }

  disableParallaxWhenScrollingDown(parallax) {
    $(document).on('click', 'a[href="#skills"]', () => {
      parallax.disable()
      setTimeout(() => parallax.enable(), 1000)
    })
  }

  initParsley() {
    $('#contact-form')
      .parsley()
      .on('field:validated', () => {
        var ok = $('.parsley-error').length === 0
        $('.parsley-errors-list').toggleClass('vibrate', !ok)
        setTimeout(() => $('.parsley-errors-list').removeClass('vibrate'), 500)
      })
  }

  initJarallax() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5
    })
  }

  initHideNavMenuOnCLickOnMobile() {
    $('body').on('click', () => {
      if (App.isMobileView()) {
        $('.navbar-collapse').collapse('hide')
      }
    })
  }

  static isMobileView() {
    return (
      App.findBootstrapEnvironment() == 'xs' ||
      App.findBootstrapEnvironment() == 'sm' ||
      App.findBootstrapEnvironment() == 'md'
    )
  }

  static findBootstrapEnvironment() {
    let envs = ['xs', 'sm', 'md', 'lg', 'xl']
    let el = document.createElement('div')
    document.body.appendChild(el)
    let curEnv = envs.shift()
    for (let env of envs.reverse()) {
      el.classList.add(`d-${env}-none`)
      if (window.getComputedStyle(el).display === 'none') {
        curEnv = env
        break
      }
    }
    document.body.removeChild(el)
    return curEnv
  }
}
