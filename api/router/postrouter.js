const { createPost, getAllPost, getPostById, updatePost,deletePostById} = require('../controllers/postcontroller')
const router = require ('express').Router()
const { authUser } = require('../utils')

router.post('/', createPost)
router.get('/',  getAllPost)
router.get('/:id', getPostById)
router.put('/:id', updatePost)
router.delete('/:id', deletePostById)

module.exports = router;
