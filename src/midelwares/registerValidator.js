const { body } = require ( 'express-validator' );
const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../database/users.json');
const User = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));


const validateRegister = [
    body('nombre').notEmpty().withMessage('You must complete the name').bail()
    .isLength({min:2}).withMessage('The name must have at least 2 characters') ,
    body('nickname').notEmpty().withMessage('You must complete the nickname').bail()
    .isLength({min:2}).withMessage('The nickname must have at least 2 characters'),
    body('email').notEmpty().withMessage('You must complete the email').bail()
    .isEmail().withMessage('You must enter a valid email')

    /* .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        });
    }) */,
    body('country').notEmpty().withMessage('You must complete the country').bail(),
    body('password').notEmpty().withMessage('You must complete the password').bail()
    .isLength({min:8}).withMessage('The password must have at least 8 characters'),
    body('forgot').notEmpty().withMessage('You must complete Confirm your password').bail()
    .isLength({min:8}).withMessage('Confirm your password must have at least 8 characters'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.JPG', '.jpeg', '.png', '.gif'];
        let fileExtension = !file? ' ':  path.extname(file.originalname);
        
         if (!file) {
            throw new Error('You have to upload an image');
        } else{
          if(!acceptedExtensions.includes(fileExtension)){
            throw new Error("Allowed file extensions are");
            }
        } 
     
    


    return true;
})
];


module.exports = validateRegister;