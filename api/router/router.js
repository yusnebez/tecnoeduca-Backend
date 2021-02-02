const router = require ('express').Router()
const teacherRouter = require('../router/teacher.router')
const studentRouter = require('../router/student.router')
const subjectRouter = require('../router/subject.router')
const authRouter = require('./auth.router')
const { authUser } = require('../utils')

router.use('/teacher', teacherRouter)
router.use('/student', studentRouter)
router.use('/subject', subjectRouter)  
router.use('/auth', authRouter)

module.exports = router;