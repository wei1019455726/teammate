const router = require('koa-router')()
const announcesController = require('../controllers/announce')

router.prefix('/announces')

router.get('/announcelist',announcesController.announcelist)

router.get('/add',announcesController.add)

router.post('/doAdd',announcesController.doAdd)

router.get('/edit', announcesController.edit)

router.post('/doEdit', announcesController.doEdit)

router.get('/delect/:b',announcesController.delect)
module.exports = router
