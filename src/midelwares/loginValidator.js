const { body } = require ( 'express-validator' );

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

module.exports = validateLogin;