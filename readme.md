## angular-playground

### install ng cli
`npm install -g @angular/cli`

### running project
`ng serve -o -> http://localhost:4200/`

### create new ng project
`ng new app-name`

### update package.json packages
`npm install --save`

### angular clean project files
```
../
angular-cli.json - angular CLI config
karma.conf.js - Karma is test runner
protractor.conf.js - Protractor is end to end (2t2) testing framework
tsconfig.json - TypeScript lang compiler config
tslint.json - for TypeScript linting (analyse code for errors)
```

```
../src/
main.ts - entry point of app
polyfills.ts - polyfills to run an Angular app in most browsers 
test.ts - main point for unit tests
tsconfig.app.json - TypeScript compiler configuration
tsconfig.spec.json  - TypeScript compiler configuration.
typing.d.ts - TypesScript declaration files

```