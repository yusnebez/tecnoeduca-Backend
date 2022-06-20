const jwt = require('jsonwebtoken')
const AdminModel = require('../models/adminmodel')

function authUser (req, res, next) {
    
    if (!req.headers.token) {
      res.status(403).json({ error: 'No Token found' })
    } else {
      jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
        if (err) { res.status(403).json({ error: 'Token not valid' }) }
  
        AdminModel.findOne({ email: token.email })
          .then(admin => {
            res.locals.admin = admin
            next()
          })
          .catch(err => res.json(err))
        })
      }
    }
  

  function handleError (err, res) {
    return res.status(400).json(err)
  }

  module.exports = {
    authUser,
    handleError 
  }
  