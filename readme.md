## Portfolio v2

[![Build Status](https://travis-ci.org/twistezo/portfolio.svg?branch=master)](https://travis-ci.org/twistezo/portfolio)

### Description

Second, actual version of my programming portfolio website. Rewritten from Angular to pure JS.

Latest version: https://twistezo.github.io/portfolio

### Features

- uses `lit-html` for templating HTML pages in JS
- webpack with hot-reload, babel, minify, gzip and uglify HTML/CSS/JS for production build
- custom implementation of i18n (internationalization) which uses JSON file
- 6 pinned repositories in projects section fetched from GitHub GraphQL API

### Tools

JavaScript, Bootstrap, Webpack, lit-html, SCSS

### Usage

Build: `npm install`

Run in development mode: `npm run dev`

Build for production: `npm run prod`

Production output is in `docs/` for fastest deploy on github page

### FAQ

1. I18n texts are not visible when running production build locally.

```
Error message: `Failed to load file:///DRIVE:/.../portfolio/docs/i18n.json: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.`

Caused by CORS mechanism. Occurs only locally. After deploying page or disabling CORS will be ok.
```
