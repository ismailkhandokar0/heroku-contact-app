const router = require('express').Router();


const{
    getAllContact,
    createContact,
    deleteContact
} = require('./control')

const {contactValidator} = require('./validatorMiddle')


router.get('/',getAllContact)
router.post('/',contactValidator,createContact)
router.get('/delete/:id',deleteContact)






module.exports = router