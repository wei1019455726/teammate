// 业务逻辑中使用

const passport = require('../util/passport')
const captcha = require('../util/captcha')
const userDao = require('../service/user_dao')
const md5 = require('../util/md5solt')
const uuid = require('node-uuid')

module.exports = {   
    login:async(ctx,next)=>{
        await ctx.render('login', {error:''})
    },

    welcome:async(ctx,next)=>{
      await ctx.render('welcome', {error:''})
  },

    index:async(ctx,next)=>{
      // let userInfo = {user_id:ctx.session.userId,user_name:ctx.session.userName};
      if(!ctx.isAuthenticated()){  //判断是否认证
        await ctx.render('index', {error:'请重新登陆'})
      }else{
        let userInfo = ctx.state.user  //认证用户
        console.log(userInfo)
        await ctx.render('index', {
          title: '找队友',
          userInfo:userInfo
        })
      }
    },
    checklogin:async(ctx,next)=>{
      return passport.authenticate('local', async (err, user, info) => {
        if (err) {
          await ctx.render('error', { message: '抱歉，权限验证错误！', error: err });
        }
        if (!user) {
          await ctx.render('login', { error: info })
        }
        else {
          if (ctx.session.code.toUpperCase() != ctx.request.body.code.toUpperCase()){
            await ctx.render('login', { error: '验证码错误' })
          }else{
            ctx.login(user)
            await ctx.response.redirect('/index')
          }
        }
      })(ctx);

    },
    logout:async(ctx,next)=>{
      ctx.logout()
      await ctx.render('login', {error:''})
    },

    register:async(ctx,next)=>{
      let body=ctx.request.body

      var solt = uuid.v4();

      var password = body.password;
      var md5Pass = await md5.MD5(password,solt);
      body.solt = solt;
      body.password=md5Pass;

      console.log(body);
      userDao.createUser(body)    
      await ctx.redirect('/index',{result:true})      
    },

    verify: async (ctx, next) => {

      var svgcaptcha = await captcha.captcha();/**调用util/captcha里面的方法生成验证码 */
  
      ctx.response.type = 'image/svg+xml';/**指定返回的类型 */
  
      ctx.session.code = svgcaptcha.text; /**验证码上面的信息 */
  
      // console.log(ctx.session.code);
  
      ctx.body = svgcaptcha.data;/**给页面返回一张图片 */
    },
}

