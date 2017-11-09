## Portfolio
[![Build Status](https://travis-ci.org/twistezo/portfolio.svg?branch=master)](https://travis-ci.org/twistezo/portfolio)

### Description
My personal portfolio with management dashboard and blog (both are hidden for unregistered users)

### Tools
Angular 4 (JS + TypeScript), Bootstrap 4, Firebase

### Requirements
npm, angular-cli

### Build, run, deploy
```
build:
npm install
npm install -g @angular/cli@1.4.4

build for prod.:
ng build --prod

run:
ng serve

deploy on github page: 
--output-path docs --base-href web-portfolio

deploy on firebase: 
firebase deploy
```

### Latest version
https://twistezo.github.io/portfolio