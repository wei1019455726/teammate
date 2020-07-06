// passport.js
//权限认证
var LocalStrategy = require('passport-local').Strategy
const userDao = require('../service/user_dao')
const passport = require('koa-passport')
const md5 = require('../util/md5solt')


const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"teammate"// 数字签名，与生成token时的一样，不能告诉用户
}
//jwt验证
passport.use(new JwtStrategy(opts,async (jwt_payload,done)=>{
    //jwt_payload 返回的是登录时返回的数据 即payload负载
    console.log(jwt_payload) ///jwt_payload这部分就是我们存放信息的地方了，你可以把用户 ID 等信息放在这里
    const user=await userDao.getUserInfo(jwt_payload.account);
    if(user){
        user.password ='' 
        user.solt=''
        done(null,user);
    }else{
        done(null,false);
    }
}))

//本地验证
passport.use(new LocalStrategy({
    usernameField: 'account',
    passwordField: 'password'
},
async function (account,password, done) {
    let result = await userDao.getUserAdminInfo(account);

    if (result !== null) {
        let md5pass = await md5.MD5(password,result.solt)
        if (result.roles[0].role_name == '管理员' || result.roles[0].role_name == '队长'){
            if (md5pass === result.password) {
                return done(null, result, '登录成功')
            } else {
                return done(null, false, '密码错误')
            }
        }else{
            return done(null, false, '身份认证错误')
        }
    } else {
        return done(null, false, '账号异常')
    }
}
))

//序列化和反序列化
// serializeUser 在用户登录验证成功以后将会把用户的数据存储到 session 中
passport.serializeUser(function (user, done) {
//保护密码
user.password =''
user.solt=''
done(null, user)
})
// deserializeUser 在每次请求的时候将从sesssion 中读取用户对象
passport.deserializeUser(function (user, done) {
 done(null, user)
})

module.exports = passport
