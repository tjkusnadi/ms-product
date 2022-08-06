const express = require('express');
const { createHandler } = require("../../utils");
const { getProductHandler } = require('../../handlers');

const router = express.Router();

router.get('/product', createHandler(getProductHandler));

module.exports = router;
