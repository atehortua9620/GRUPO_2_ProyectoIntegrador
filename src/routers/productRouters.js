const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

/* const {createEditProduct,procesandoData } = require('../controllers/productController'); */

const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname,'../public/images'));
    },
    filename: (req, file, cb)=>{
        
        const nombre = 'image_product'+ Date.now() + path.extname(file.originalname)
        cb(null, nombre);
        
    }
})

const uploadFile = multer({storage});

/*Ruta principal de productos */
router.get('/detail/:id',productController.productDetail);
/*Ruta que envia el nuevo producto */
router.get('/createEditProduct',productController.createEditProduct);
/*Ruta para procesar informacion del nuevo producto */
router.post('/createEditProduct',uploadFile.single('image'),productController.procesandoData);
/* Ruta que elimina el producto*/
router.get('/createEditProduct/delete/:id',productController.eliminarProduct);


module.exports = router;