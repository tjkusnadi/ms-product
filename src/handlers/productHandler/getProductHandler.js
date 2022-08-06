const getProductHandler = async (req, res) => {
  const result = await res.locals.msAuthConnector.verifyToken(req.headers.token);
  return res.send({ result: 'ok' });
};

module.exports = getProductHandler;
