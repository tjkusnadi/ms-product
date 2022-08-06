const express = require('express');
const mongodb = require('mongodb');
const request = require('request');

const {
  db: dbConfig,
  http,
  msAuth: msAuthConfig,
} = require('../../config');
const { dbMiddleware, httpConnector } = require('../middlewares');
const routes = require('../routes');
const { errorHandler } = require('../utils');

const app = express();
const db = dbMiddleware(app, mongodb, dbConfig);
const msAuth = httpConnector(request, msAuthConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB Initialization
app.use(db);
app.use(msAuth);

//router initialization
routes(app);

//error handler
app.use(errorHandler);

app.listen(http.httpPort, () => console.log(`app running at http://localhost:${http.httpPort}`));