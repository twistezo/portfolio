import AOS from 'aos'
import Layout from '../scripts/layout'
import Parallax from 'parallax-js'
import { jarallax } from 'jarallax'
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
    this._initSmoothScrolling()
    this._initParallax()
    this._initParsley()
    this._initJarallax()
    this._initHideNavMenuOnCLickOnMobile()
    this._initThemeSwitcher()
    new I18n().init()
    new Projects().fetchData()
    new CookieWarning().init()
  }

  _initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const hrefAttr = this.getAttribute('href')
        if (hrefAttr !== '#') {
          document.querySelector(hrefAttr).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }
      })
    })
  }

  _initParallax = () => {
    let parallax = new Parallax(document.getElementById('scene'))
    document.querySelector('a[href="#skills"]').addEventListener('click', e => {
      // disable parallax when scrolling down for performance reason
      e.preventDefault()
      parallax.disable()
      setTimeout(() => parallax.enable(), 1000)
    })
  }

  // doesn't work without jquery
  _initParsley = () => {
    // eslint-disable-next-line no-undef
    $('#contact-form')
      .parsley()
      .on('field:validated', () => {
        // eslint-disable-next-line no-undef
        var ok = $('.parsley-error').length === 0
        // eslint-disable-next-line no-undef
        $('.parsley-errors-list').toggleClass('vibrate-button', !ok)
        // eslint-disable-next-line no-undef
        setTimeout(() => $('.parsley-errors-list').removeClass('vibrate'), 500)
      })
  }

  _initJarallax = () => {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5
    })
  }

  _initHideNavMenuOnCLickOnMobile = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('#navbarNav').classList.replace('show', 'hide')
      })
    })
  }

  _initThemeSwitcher = () => {
    const lightBtn = document.getElementById('light-mode-btn')
    const darkBtn = document.getElementById('dark-mode-btn')
    const body = document.querySelector('body')

    const vibrateLightBtn = () => {
      lightBtn.classList.toggle('vibrate')
    }
    vibrateLightBtn()
    let interval = setInterval(() => {
      vibrateLightBtn()
      darkBtn.classList.toggle('vibrate')
    }, 2000)
    window.addEventListener(
      'load',
      () => {
        interval
      },
      false
    )

    body.classList.add('dark-mode')
    lightBtn.addEventListener('click', e => {
      e.preventDefault()
      clearInterval(interval)
      body.classList.remove('dark-mode')
      body.classList.add('light-mode')
    })
    darkBtn.addEventListener('click', e => {
      e.preventDefault()
      clearInterval(interval)
      body.classList.remove('light-mode')
      body.classList.add('dark-mode')
    })
  }
}
