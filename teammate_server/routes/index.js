const router = require('koa-router')()
const homeController = require('../controllers/home')
const ueditor = require('koa2-ueditor')

router.get('/', async (ctx, next) => {
  await ctx.render('login', {
  })
})

router.get('/login',homeController.login)
   
router.get('/index',homeController.index)

router.get('/welcome',homeController.welcome)

router.post('/checkLogin',homeController.checklogin)
  
router.get('/logout',homeController.logout)

router.get('/verify',homeController.verify)

router.get('/register',async (ctx, next) => {
  await ctx.render('register', {
  })
})
router.post('/register',homeController.register)



module.exports = router
