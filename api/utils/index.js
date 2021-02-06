const jwt = require('jsonwebtoken')
const teacherModel = require('../models/teacher.model')

function authUser (req, res, next) {
    
    if (!req.headers.token) {
      res.status(403).json({ error: 'No Token found' })
    } else {
      jwt.verify(req.headers.token, 'secret', (err, token) => {
        if (err) { res.status(403).json({ error: 'Token not valid' }) }
  
        teacherModel.findOne({ email: token.email })
          .then(user => {
            res.locals.user = user
            next()
          })
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
  