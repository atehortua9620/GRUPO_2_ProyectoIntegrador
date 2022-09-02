const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const usersController = require('../controllers/usersController');
/*requiriendo midleware de negacion de ruta loggin */
const negacion = require('../midelwares/logindenied');
const validateLogin = require('../midelwares/loginValidator');
const validateRegister = require('../midelwares/registerValidator')


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

router.get('/register',negacion,usersController.register);
router.post('/register',uploadFile.single('avatar'),usersController.registerManager)
router.get('/login',negacion,usersController.login);
router.post('/login',usersController.loginProcess);

module.exports = router;