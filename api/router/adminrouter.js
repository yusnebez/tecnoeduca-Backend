const { getAdminById, updateAdmin, deleteAdminById, getAllAdmin } = require('../controllers/admincontroller')
const router = require ('express').Router()
const { authUser } = require('../utils')

router.get('/:id',authUser, getAllAdmin)
router.get('/:id', authUser, getAdminById)
router.put('/:id', authUser, updateAdmin)
router.delete('/:id', authUser, deleteAdminById)

module.exports = router;
 