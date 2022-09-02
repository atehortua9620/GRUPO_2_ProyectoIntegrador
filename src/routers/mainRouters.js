const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainController');
/*se requiere midleware para enviar a log para entrar al carrito de compras */
const send2log = require('../midelwares/send2login');


router.get('/',mainController.home);
router.get('/productCar',send2log,mainController.productCar);
router.get('/logout', mainController.killsession)

/* router.get('*', mainController.notFound); */

module.exports= router;