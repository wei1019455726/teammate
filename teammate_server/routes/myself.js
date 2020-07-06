const router = require('koa-router')()
const myselfController = require('../controllers/myself')

router.prefix('/myself')

router.get('/myselflist',myselfController.myselflist)
router.get('/schedel',myselfController.schedel)

module.exports = router
