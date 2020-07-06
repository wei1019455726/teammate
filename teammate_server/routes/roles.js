const router = require('koa-router')()
const rolesController = require('../controllers/role')

router.prefix('/roles')

router.get('/rolelist',rolesController.rolelist)
router.get('/add',rolesController.add)
router.post('/doAdd', rolesController.doAdd)
router.get('/delect/:b',rolesController.delect)

module.exports = router
