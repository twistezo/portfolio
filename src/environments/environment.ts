// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAtZN0af5Xuf3vDLvav7cyjSrH0yuCyLzY',
    authDomain: 'twistezo-portfolio.firebaseapp.com',
    databaseURL: 'https://twistezo-portfolio.firebaseio.com',
    projectId: 'twistezo-portfolio',
    storageBucket: 'twistezo-portfolio.appspot.com',
    messagingSenderId: '905549320087'
  }
};
