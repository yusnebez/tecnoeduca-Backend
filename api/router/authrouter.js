const {signup,login } = require('../controllers/authcontroller')
const router = require ('express').Router()

router.post('/signup', signup)
router.post('/login', login)

module.exports = router

