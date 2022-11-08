const express = require ('express')
const dotenv = require ('dotenv')
const morgan = require ('morgan')
const exphbs = require ('express-handlebars')
const connectDB = require ('./config/db')

// load config
dotenv.config({path:'./config/dotenv.config.env'})


const app = express()

//logging
if (process.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', exphbs({defaultLayout:'main',extname:'.hbs'}));
app.set('vew engine', '.hbs');

const PORT = process.env.PORT || 3000

app.listen(
    PORT,
     console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`)
);


