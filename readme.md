### Little Big Web Service 
[![Build Status](https://travis-ci.org/twistezo/little-big-web-service.svg?branch=master)](https://travis-ci.org/twistezo/little-big-web-service)

### Description
Currently it is a playground/draft for Node.js + MongoDB RESTful API server and React client of web service. <br/>
Client uses two databases for testing: MongoDB from server and Firebase from cloud.

### Tools
Server: Node.js, Express, MongoDB <br/>
Client: React, Bootstrap, Firebase <br/>
Other: Webpack, Gulp, Babel, npm, Travis CI

### Requirements
npm or yarn, gulp-cli, MongoDB, Node.js

### Important before testing Node.js server with HTTPS
This server uses HTTPS locally self-signed certificate.


### Build, run
You have two options to run
1. Run Node.js server locally and React client online</br>
- Firstly in MongoDB installed path find and use `mongod` to run database. <br/>
- Go to `little-big-web-service/server/` and use `npm install` to build and then `npm start` to run Node.js server. <br/>
- In browser go to https://twistezo.github.io/little-big-web-service/

2. Run Node.js server locally and React client also locally <br/>
- Run `mongod` and Node.js server as mentioned above. <br/>
- Go to `little-big-web-service/client` and use `npm install` to build and then `gulp serve` to start React client locally. <br/>
- Client uses HTTPS connection from server with locally self-signed HTTPS certificate 
so when you go to React client at http://localhost:3001/ you won't see data in `Node.JS REST` 
tab beacause all modern browsers block that certificates. To fix this go to server URL in browser
https://localhost:8443. You will see warning. Select that is not a dangerous website :) That's all. For now React client will be working fine with node.js RESTful API.

### Client Gulp & npm all scripts info
```
gulp or gulp build
gulp serve
gulp serve:dist
gulp test
gulp test:auto

npm run build
npm run serve
npm run serve:dist
npm run test // with Karma
npm run test:auto // with Karma in watch mode
```

### The latest version
https://twistezo.github.io/little-big-web-service/