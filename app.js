require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const mongoose = require('mongoose')
const AllRouter = require('./router')
const config = require('config')



const app = express()
app.set('view engine','ejs')



// check development or production mode
if(app.get('env') === 'development'){
    app.use(morgan('dev'))
}



//all midlewares
let middleware = [
    express.urlencoded({extended:true}),
    express.json()
]

app.use(middleware)




app.use('/',AllRouter)


// name of environment variable
console.log(chalk.yellow.inverse(config.get('name')))


const PORT = process.env.PORT || 3109
mongoose.connect(`mongodb+srv://${config.get('db-username')}:${config.get('db-password')}@cluster0.vn7sd.mongodb.net/<dbname>?retryWrites=true&w=majority`,{useNewUrlParser:true})
.then(() =>{
    console.log(chalk.green(`Database Is Connected`))
    app.listen(PORT,() =>{
        console.log(chalk.green.inverse(`SERVER IS RUNNING ${PORT}`))
    })
})