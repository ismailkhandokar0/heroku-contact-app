
const {Schema,model} = require('mongoose')

const createSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        requried:true
    }
})

let Contact = model('NanaContact',createSchema)

module.exports = Contact