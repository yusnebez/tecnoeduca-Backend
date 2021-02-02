const { getAllSubjects, getSubjectById, updateSubject, deleteSubjectById, createSubject } = require('../controllers/subject.controller')
const router = require ('express').Router()
const { authUser } = require('../utils')

router.post('/', authUser, createSubject)
router.get('/', authUser, getAllSubjects)
router.get('/:id', authUser, getSubjectById)
router.put('/:id', authUser, updateSubject)
router.delete('/:id', authUser, deleteSubjectById)

module.exports = router;
