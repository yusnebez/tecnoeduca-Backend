require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')


mongoose.connect(process.env.MONGO_URL, {  
    dbName: process.env.MONGO_DB || 'tecnoeduca',
    useNewUrlParser: true,
    useUnifiedTopology: true 
},
    function(error){    
        if (error) {
            console.error(error)}
        else{
            console.log('conected')
        }
    })


const app = express()
app
    .use(cors())
    .use(morgan('combined'))
    .use(express.json())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/api', require('./api/router/router'))


app.listen(3000, (err) => {
    if (err) { throw new Error(err) }
    console.info('>'.repeat(40))
    console.info('💻  Tecnoeduca Server Live')
    console.info(`📡  PORT: http://localhost:3000`)
    console.info('>'.repeat(40) + '\n')
  })
 



