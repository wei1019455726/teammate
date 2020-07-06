const router = require('koa-router')()
const teamsController = require('../controllers/team')

router.prefix('/teams')

router.get('/teamlist',teamsController.teamlist)
router.get('/task',teamsController.task)
router.get('/message',teamsController.message)


module.exports = router