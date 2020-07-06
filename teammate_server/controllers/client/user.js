const userDao =require('../../service/user_dao')
const md5 = require('../../util/md5solt')
const jwt = require('jsonwebtoken');
const uuid = require('node-uuid')

module.exports={  
      //获取用户信息vuex保存
      userinfo:async (ctx,next)=>{
        ctx.body = {
            data:{                
             user:ctx.state.user,
             account: ctx.state.user.account,
             user_name: ctx.state.user.user_name,
             role: ctx.state.user.roles[0].role_name,
             user_sex:ctx.state.user.user_sex,
             user_phone:ctx.state.user.user_phone,
             nickname:ctx.state.user.nickname,
             user_school:ctx.state.user.user_school,
             user_major:ctx.state.user.user_major,
             user_experience:ctx.state.user.user_experience,
             user_introduce:ctx.state.user.user_introduce,
             user_age:ctx.state.user.user_age

            }
        };
      },

      
    //用户登录
      postlogin:async(ctx)=>{

        const data = ctx.request.body
        // 查询用户
        const user = await userDao.getUserInfo(data.account)  
        // 判断用户是否存在
        // console.log('user:'+user.user_name)
        if (!user) {
            //表示不存在该用户

            ctx.status = 200;
            ctx.body = {
                code:-1,
                data:{
                    message: '该用户不存在'
                }
            };
            return;
        }
        //验证密码
        let md5pass = await md5.MD5(data.password,user.solt)
        if(md5pass === user.password){
            const payload = {
                account:user.account,
                user_name:user.user_name,
            };
            // 生成token
            const token = jwt.sign(payload, "teammate", {
                expiresIn: 3600
            });
            console.log("生成token："+ token)
            ctx.status = 200;
            ctx.body = {
                code:1,
                data:{
                    message: '验证成功',
                    token: 'Bearer ' + token
                }
            }
        }else{
            ctx.status = 200;
            ctx.body = {
                code:0,
                data:{
                    message: '密码错误'
                }
            };
        }
    },
    
    postregister:async(ctx,next)=>{
        let body=ctx.request.body
  
        var solt = uuid.v4();
  
        var password = body.password;
        var md5Pass = await md5.MD5(password,solt);
        body.solt = solt;
        body.password=md5Pass;
        userDao.createUser(body)                   
        // 查询用户
        const user = await userDao.getUserInfo(body.account)
        
        if (user) {
            //表示不存在该用户
            // ctx.status = 404;
            ctx.status = 200;
            ctx.body = {
                code:-1,
                data:{
                    message: '该用戶id以存在存在，請重新選擇'
                }
            }
        }else{
            
            ctx.body = {
                code:0,
                data:{
                    message: '注册成功'
                }
        }
    }},

    putuser:async(ctx,next)=>{

        const data = ctx.request.body          
        let account= ctx.state.user.account
        await userDao.putuser(data, account); 
        console.log(data)   
        ctx.status = 200
    },
 }