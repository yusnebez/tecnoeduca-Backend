const TeacherModel = require("../models/teacher.model");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


// const { ReplSet } = require("mongodb");

function signup(req, res){
    const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
    TeacherModel.
    create({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPasswd
    })
    .then(teacher => {
        const data = {name: teacher.name, email: teacher.email}
        const token = jwt.sign (data, process.env.SECRET)
      
    
        res.status(200).json({ token: token, ...data})
  
    })

    .catch(err=> res.status(500).json(err))
   
    

}

function login(req, res){
    TeacherModel
     .findOne({
        email: req.body.email,
    })
    .then(teacher => {
        console.log(teacher)
        if (teacher){
        if (bcrypt.compareSync(req.body.password, teacher.password)){
            const data = { email: teacher.email, name: teacher.name}
            const token = jwt.sign (data, process.env.SECRET)
          
            
            console.log('hola',token, data)
            res.status(200).json({ token: token, ...data})
            }
        else {

            res.send('Email no register')

        }

        }
     
     })
    .catch(err=> res.status(500).json(err))

}

module.exports = { signup, login}