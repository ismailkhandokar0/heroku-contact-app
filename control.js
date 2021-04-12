
const Contact  = require('./Contact')
const {validationResult} = require('express-validator')


exports.getAllContact = (req,res,next) =>{
    Contact.find()
    .then(contacts => {
        return res.render('index',{
            title:'Home Page',
            contacts,
            error:{},
            value:{}
        })
    })
}

exports.createContact =async (req,res,next) =>{
    // console.log(req.body)
    let {name,email,phone,id} = req.body

    let errors = validationResult(req).formatWith(error => error.msg)
    // console.log(errors)

    let createContact = new Contact({
        name,
        email,
        phone
    })

    if(!errors.isEmpty()){
        Contact.find()
        .then(contacts =>{
            return res.render('index',{
                contacts,
                error:errors.mapped(),
                title:'Error Occoured',
                value:{
                    name,
                    phone,
                    email,
                    id
                }
            })
        })
    }else{

        if(id){

            let update =  await Contact.findOneAndUpdate(
                {_id:id},
                {$set:{
                    name,
                    phone,
                    email
                }}
            )

            console.log(`Updated Contact ${update}`)
            return res.redirect('/')

        }else{

            let created = await createContact.save()

            console.log(`Contact created ${created}`)
            
            return res.redirect('/')
        }
    }

    
   
    
}


exports.deleteContact = async (req,res,next) =>{
    let {id} = req.params

   await Contact.findOneAndDelete(
        {_id:id}
    )

    res.redirect('/')
}