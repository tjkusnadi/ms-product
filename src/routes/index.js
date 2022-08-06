const product = require('./product');

const routers = [
  ...product
];

module.exports = (app) => {
  routers.forEach(router => app.use(router));
};