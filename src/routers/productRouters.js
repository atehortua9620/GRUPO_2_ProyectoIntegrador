const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {createEditProduct,procesandoData } = require('../controllers/productController');

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


router.get('/detail/:id',productController.productDetail);

router.get('/createEditProduct',productController.createEditProduct);
router.post('/createEditProduct',uploadFile.single('image'), procesandoData);

module.exports = router;