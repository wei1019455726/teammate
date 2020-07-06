const router = require('koa-router')()
const userController = require('../../controllers/client/user')
const passport = require("../../util/passport")


router.prefix('/api/users')

router.post('/postlogin', userController.postlogin)

router.post('/postregister', userController.postregister)

router.all('/*',
passport.authenticate('jwt', { session: false })
,async (ctx, next) => {
    console.log(ctx.request)
    await next()
 })


router.get('/userinfo', userController.userinfo)

router.put('/putuser', userController.putuser)







module.exports = router
