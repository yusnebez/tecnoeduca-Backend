require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path');


const dburl = process.env.MONGO_URL || 'mongodb+srv://yusnebez:changes66@cluster0.mymkx.mongodb.net/grancanariahouse?retryWrites=true&w=majority'

mongoose 
  .connect( dburl ,{
         useNewUrlParser: true,
         useUnifiedTopology: true, })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

const app = express()
app
    .use(cors())
    .use(morgan('combined'))
    .use(express.json())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/api', require('./api/router/router'))

const port = process.env.PORT || 4800

app.listen(port, (err) => {
    if (err) { throw new Error(err) }
    console.info('>'.repeat(40))
    console.info('💻  Linaweback')
    console.info(`📡  PORT:`, + port)
    console.info('>'.repeat(40) + '\n')
  })
 

  


