## Portfolio v2
[![Build Status](https://travis-ci.org/twistezo/portfolio.svg?branch=master)](https://travis-ci.org/twistezo/portfolio)

### Description
Second (actual) version of my programming portfolio website. Rewritten from Angular to pure JS.

### Features
- without frameworks (clean, fast, lightweight and maintainability)
- uses `lit-html` for templating HTML pages in JS
- minimal webpack configuration with hot-reload in development mode and with minify and uglify HTML/CSS/JS for production build
- custom implementation of i18n (internationalization) which uses JSON file

### Tools
JavaScript ES6 (babel, eslint), Bootstrap 4, Webpack 4, lit-html

### Requirements
npm

### Build, run
To build: `npm install`

To run in development mode: `npm run dev`

To build for production: `npm run prod`

Note thath output from above is in `docs/` for fastest deploy on github page

### FAQ
1. Texts are not visible when running production build locally.
```
Error message: `Failed to load file:///DRIVE:/.../portfolio/docs/i18n.json: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.`

Note: Occurs only locally. After deploying page will be ok.
```

### Latest version
https://twistezo.github.io/portfolio
