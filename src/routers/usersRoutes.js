const { Router } = require('express');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require ( 'express-validator' );

const usersController = require('../controllers/usersController');
/*requiriendo midleware de negacion de ruta loggin */
const negacion = require('../midelwares/logindenied');


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname,'../../public/images/users'));
    },
    filename: (req, file, cb)=>{
        
        const nombre = 'image_user'+ Date.now() + path.extname(file.originalname)
        cb(null, nombre);
        
    }
})

const uploadFile = multer({storage});

const validateRegister = [
    body('nombre').notEmpty().withMessage('You must complete the name').bail()
    .isLength({min:2}).withMessage('The name must have at least 2 characters'),
    body('nickname').notEmpty().withMessage('You must complete the nickname').bail()
    .isLength({min:2}).withMessage('The nickname must have at least 2 characters'),
    body('email').notEmpty().withMessage('You must complete the email').bail()
    .isEmail().withMessage('You must enter a valid email')
    .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        });
    }),
    body('country').notEmpty().withMessage('You must complete the country').bail(),
    body('password').notEmpty().withMessage('You must complete the password').bail()
    .isLength({min:8}).withMessage('The password must have at least 8 characters'),
    body('forgot').notEmpty().withMessage('You must complete Confirm your password').bail()
    .isLength({min:8}).withMessage('Confirm your password must have at least 8 characters'),
    body('avatar').custom((value, {req}) => {
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

const validateLogin = [
    body('email').notEmpty().withMessage('You must complete the email').bail()
    .isEmail().withMessage('You must enter a valid email')
    .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        });
    }),
    body('password').notEmpty().withMessage('You must complete the password').bail()
    .isLength({min:8}).withMessage('The password must have at least 8 characters')
    .custom((value, { req }) => {
        return User.findOne({ password: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('The password already exists!');
          }
        });
    }),
];


router.get('/register',negacion,usersController.register);
router.post('/register',uploadFile.single('avatar'),validateRegister,usersController.registerManager)
router.get('/login',negacion,usersController.login);
router.post('/login',validateLogin,usersController.loginProcess);

module.exports = router;