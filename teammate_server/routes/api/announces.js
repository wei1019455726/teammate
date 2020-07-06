const router = require('koa-router')()
const announceController = require('../../controllers/client/announce')
const passport = require("../../util/passport")

router.prefix('/api/announces')

router.all('/*',
passport.authenticate('jwt', { session: false })
,async (ctx, next) => {
    console.log(ctx.request)
    await next()
 })


router.get('/announceinfo', announceController.announceinfo)
router.get('/getOneAnnounce', announceController.getOneAnnounce)


module.exports = router
