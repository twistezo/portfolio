## Web Portfolio source code

### build & run
`npm install -g @angular/cli`
`npm install`
`ng serve`

### deploy ng project to github page
`ng build --prod --output-path docs --base-href web-portfolio`

https://github.com/angular/angular-cli/wiki/stories-github-pages

### deploy on firebase host
```
firebase login
firebase init
ng build --prod
firebase deploy
```