const express = require('express');

const mainController = require('../controllers/paginas');


const router = express.Router();


router.get('/',mainController.home);
router.get('/productDetail',mainController.productDetail);
router.get('/productCar',mainController.productCar);
router.get('/register',mainController.register);

module.exports= router;