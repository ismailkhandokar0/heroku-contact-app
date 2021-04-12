const Contact = require('./Contact')
const{body} = require('express-validator')

exports.contactValidator = [
    body('name')
    .trim()
    .not().isEmpty().withMessage('Please enter A Valid Name')
    .isLength({min:3,max:30}).withMessage('Name Contain Min 3 & Max 30 characters'),

    body('email')
    .isEmail().withMessage('Please enter a valid email')
    .trim()
    .not().isEmpty().withMessage('Please Enter A Valid Email')
    ,

    body('phone')
    .trim()
    .not().isEmpty().withMessage('Please enter a valid phone number')
    .isLength({min:5, max:30}).withMessage('Number Contain Min 5 & Max 30 characters')
]