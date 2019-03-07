const _createClass = (() => {
  const defineProperties = (target, props) => {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return (Constructor, protoProps, staticProps) => {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

const _classCallCheck = (instance, Constructor) => {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

$(document).ready(() => {
  const TextScramble = (() => {
    function TextScramble(el) {
      _classCallCheck(this, TextScramble)

      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }

    _createClass(TextScramble, [
      {
        key: 'setText',
        value: function setText(newText) {
          const _this = this

          const oldText = this.el.innerText
          const length = Math.max(oldText.length, newText.length)
          const promise = new Promise(function(resolve) {
            return (_this.resolve = resolve)
          })
          this.queue = []
          for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from: from, to: to, start: start, end: end })
          }
          cancelAnimationFrame(this.frameRequest)
          this.frame = 0
          this.update()
          return promise
        }
      },
      {
        key: 'update',
        value: function update() {
          let output = ''
          let complete = 0
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let _queue$i = this.queue[i],
              from = _queue$i.from,
              to = _queue$i.to,
              start = _queue$i.start,
              end = _queue$i.end,
              char = _queue$i.char

            if (this.frame >= end) {
              complete++
              output += to
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar()
                this.queue[i].char = char
              }
              output += '<span class="dud">' + char + '</span>'
            } else {
              output += from
            }
          }
          this.el.innerHTML = output
          if (complete === this.queue.length) {
            this.resolve()
          } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
          }
        }
      },
      {
        key: 'randomChar',
        value: function randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
      }
    ])

    return TextScramble
  })()

  const phrases = [
    'Łukasz Kółko',
    'Rust developer',
    'JavaScript developer',
    'Software developer'
  ]

  const el = document.querySelector('.textScramble')
  const fx = new TextScramble(el)

  let counter = 0
  const next = function next() {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2000)
    })
    counter = (counter + 1) % phrases.length
  }

  next()
})
