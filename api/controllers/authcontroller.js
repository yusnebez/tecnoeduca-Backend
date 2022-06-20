const AdminModel = require('../models/adminmodel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const signup = (req, res) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
    AdminModel.
    create({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPasswd
    })
    .then(admin => {
        const data = {name: admin.name, email: admin.email}
        const token = jwt.sign (data, `${process.env.SECRET}`)
      
    
        res.status(200).json({ token: token, ...data})
  
    })

    .catch(err=> res.status(500).json(err))
   
    

}

const login = (req, res) => {
    console.log(req.body.email, req.body.password)
    AdminModel
     .findOne({
        email: req.body.email,   
    })
    .then(admin => {
        if (admin){
        if (bcrypt.compareSync(req.body.password, admin.password)){
            const data = { email: admin.email, name: admin.name}
            const token = jwt.sign (data,`${process.env.SECRET}`)
          
        
            
            res.status(200).json({ token: token, ...data})
            }
        else {

            res.send('Email no register')

        }

        }
     
     })
    .catch(err=> res.status(500).json(err))

}

module.exports ={signup, login}