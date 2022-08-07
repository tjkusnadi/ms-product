const getProductHandler = async (req, res) => {
  const result = await res.locals.msAuthConnector.verifyToken(req.headers.token);
  const token = JSON.parse(result);

  // logic
  // TODO: 
  // - insert product
  // - get product
  // - update product
  // - delete product

  return res.send({ token });
};

module.exports = getProductHandler;
