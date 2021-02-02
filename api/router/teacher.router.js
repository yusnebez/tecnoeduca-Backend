const { getAllTeachers, getTeacherById, updateTeacher, deleteTeacherById } = require('../controllers/teacher.controller')
const router = require ('express').Router()
const { authUser } = require('../utils')

router.get('/', authUser, getAllTeachers)
router.get('/:id', authUser, getTeacherById)
router.put('/:id', authUser, updateTeacher)
router.delete('/:id', authUser, deleteTeacherById)

module.exports = router;
 