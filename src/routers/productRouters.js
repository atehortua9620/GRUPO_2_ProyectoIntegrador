const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail',productController.productDetail);
router.get('/createEditProduct',productController.createEditProduct);

module.exports = router;