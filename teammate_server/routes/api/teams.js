const router = require('koa-router')()
const teamController = require('../../controllers/client/team')
const passport = require("../../util/passport")

router.prefix('/api/teams')

router.all('/*',
passport.authenticate('jwt', { session: false })
,async (ctx, next) => {
    console.log(ctx.request)
    await next()
 })

router.post('/postactivity', teamController.postactivity)
router.get('/activityinfo', teamController.activityinfo)
router.get('/teaminfo', teamController.teaminfo)
router.post('/postTeam', teamController.postTeam)
router.get('/useractivityinfo', teamController.useractivityinfo)
router.post('/postTask', teamController.postTask)
router.get('/getTask', teamController.getTask)
router.put('/putTask', teamController.putTask)
router.delete('/deletetask/:id', teamController.deletetask)
router.get('/getTeamuser', teamController.getTeamuser)
router.get('/getuserinfo', teamController.getuserinfo)
router.delete('/deleteteammate/:id', teamController.deleteteammate)
router.get('/teammateshenhe', teamController.teammateshenhe)
router.get('/taskok', teamController.taskok)
router.post('/postsquareinfo', teamController.postsquareinfo)
router.get('/getsquare', teamController.getsquare)
router.get('/getschedule', teamController.getschedule)


module.exports = router