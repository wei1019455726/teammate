const router = require('koa-router')()
const usersController = require('../controllers/user')

router.prefix('/users')

router.get('/userlist',usersController.userlist)
router.get('/add',usersController.add)
router.post('/doAdd', usersController.doAdd)
router.get('/edit', usersController.edit)
router.post('/doEdit', usersController.doEdit)

module.exports = router
