const express = require('express');
const router = express.Router();

const {getVendorProducts} = require('../controllers/product.controller');

router.get('/vendor', getVendorProducts);


module.exports = router;