## Portfolio source code

### build & run
```
npm install -g @angular/cli
ng serve
```

### build for deploy
`ng build --aot=true --output-hashing=all --sourcemaps=false --extract-css=true --named-chunks=false`

### deploy on github page
`... --output-path docs --base-href web-portfolio`

### deploy on firebase
```
... firebase deploy
```