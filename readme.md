## Portfolio source code
Travis CI [![Build Status](https://travis-ci.org/twistezo/portfolio.svg?branch=master)](https://travis-ci.org/twistezo/portfolio)

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