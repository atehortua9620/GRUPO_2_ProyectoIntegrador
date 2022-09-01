const { body } = require ( 'express-validator' );

const validateRegister = [
    body('nombre').notEmpty().withMessage('You must complete the name').bail()
    .isLength({min:2}).withMessage('The name must have at least 2 characters') ,
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

module.exports = validateRegister;