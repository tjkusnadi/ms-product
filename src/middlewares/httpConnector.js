const { MsAuthConnector } = require('../connectors');

const httpConnector = (request, msAuthConfig) => {
  return async (req, res, next) => {
    res.locals.msAuthConnector = new MsAuthConnector({ request, baseUrl: msAuthConfig.baseUrl });
    next();
  };
};

module.exports = httpConnector;