const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainController');


router.get('/',mainController.home);

router.get('/productCar',mainController.productCar);
router.get('/register',mainController.register);
router.get('/login',mainController.login);
/* router.get('*', mainController.notFound); */

module.exports= router;