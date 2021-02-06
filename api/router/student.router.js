const { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudentById, getbyEmail, addSubject} = require('../controllers/student.controller')
const { authUser } = require('../utils')
const router = require ('express').Router()

router.post('/', authUser, createStudent)
router.get('/', authUser, getAllStudents)
router.get('/buscar', getbyEmail)
router.get('/:id', authUser, getStudentById)
router.put('/:id', authUser, updateStudent)
router.delete('/:id', authUser, deleteStudentById)
router.put('/:id/subjectid', authUser, addSubject)
module.exports = router