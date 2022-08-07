const { dbConnector } = require('../connectors');
const { ProductModel } = require('../models');

const createDbMiddleware = (app, mongodb, dbConfig) => {
  dbConnector(app, mongodb, dbConfig);
  return async (req, res, next) => {
    const { db } = app.locals.mongo;
    res.locals.dbConnector = new ProductModel({ db });
    next();
  };
};

module.exports = createDbMiddleware;
