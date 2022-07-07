const { Router } = require('express');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const usersController = require('../controllers/usersController');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname,'../public/images/users'));
    },
    filename: (req, file, cb)=>{
        
        const nombre = 'image_user'+ Date.now() + path.extname(file.originalname)
        cb(null, nombre);
        
    }
})

const uploadFile = multer({storage});

router.get('/register',usersController.register);
router.post('/register',uploadFile.single('avatar'),usersController.registerManager)
router.get('/login',usersController.login);

module.exports = router;