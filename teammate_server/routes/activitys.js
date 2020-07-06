const router = require('koa-router')()
const activitysController = require('../controllers/activity')

router.prefix('/activitys')

router.get('/activitylist',activitysController.activitylist)
router.get('/examine', activitysController.examine)
router.post('/examine', activitysController.doExamine)

module.exports = router
