<div style="color: red; font-weight: bold;">
   This project is no longer maintained.

Currently it's a complete draft for portfolio website in three versions.

</div>

---

## Portfolio

[![Build Status](https://travis-ci.org/twistezo/portfolio.svg?branch=master)](https://travis-ci.org/twistezo/portfolio)

Portfolio website draft.

[Live](https://twistezo.github.io/portfolio) version.

### History

1. First version was written in Angular 4 (JS + TypeScript) with Bootstrap and Firebase.

   Check [angular](https://github.com/twistezo/portfolio/tree/angular) branch for code, detailed description and live preview.

👉 2. This is second, actual version. Rewritten from Angular to pure JavaScript.

3. Currently I'm rewriting this app to React with TypeScript.

   You can follow the progress on [react](https://github.com/twistezo/portfolio/tree/react) branch.

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
