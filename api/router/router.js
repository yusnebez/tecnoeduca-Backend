const router = require('express').Router()
const adminRouter = require('./adminrouter')
const postRouter = require('./postrouter')
const authRouter = require('./authrouter')


router.use('/admin', adminRouter)
router.use('/villa', postRouter)  
router.use('/', authRouter)

module.exports = router;