const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require ( 'express-validator' );

/* const {createEditProduct,procesandoData } = require('../controllers/productController'); */

const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname,'../../public/images'));
    },
    filename: (req, file, cb)=>{
        
        const nombre = 'image_product'+ Date.now() + path.extname(file.originalname)
        cb(null, nombre);
        
    }
})

const uploadFile = multer({storage});

const validateCreateEditProduct = [
    body('title').notEmpty().withMessage('You must complete the title').bail()
    .isLength({min:5}).withMessage('The title must have at least 5 characters'),
    body('description').notEmpty().withMessage('You must complete the description').bail()
    .isLength({min:20}).withMessage('The description must have at least 20 characters'),
    body('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

        if (!file) {
            throw new Error('You have to upload an image');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Allowed file extensions are ${acceptedExtensions.join(', ')}`);
            }
    }
    return true;
})
];

/*Ruta principal de productos */
router.get('/detail/:id',productController.productDetail);
/*Ruta que envia el nuevo producto */
router.get('/createEditProduct',productController.createEditProduct);
/*Ruta para procesar informacion del nuevo producto */
router.post('/createEditProduct',uploadFile.single('image'),validateCreateEditProduct,productController.procesandoData);
/* Ruta que elimina el producto*/
router.get('/createEditProduct/delete/:id',productController.eliminarProduct);
/*editar producto */
router.put('/createEditProduct/edit/:id',uploadFile.single('image'), productController.update);
router.get('/createEditProduct/edit/:id', productController.editar);


module.exports = router;