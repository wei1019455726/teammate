const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const userDao = require('../service/user_dao')
const roleDao = require('../service/role_dao')
const md5 = require('../util/md5solt')
const uuid = require('node-uuid')



module.exports={
    userlist:async (ctx,next)=>{

      //分页查询
      var page = ctx.request.query.page || 1;

      var pageSize = 8;

      //模糊查询
      var account = ctx.request.query.account;
      var userName = ctx.request.query.userName;
      
      var json = {};
      
      if (account && userName ) {
        //es6新特性拼接对象
        json = Object.assign({ [Op.or]: [{ "account": { [Op.like]: `%${account}%` } }, { "user_name": { [Op.like]: `%${userName}%` } }] })
    
      } else if (account || userName ) {
    
        json = Object.assign({ "account": { [Op.like]: `%${account}%` } }, { "user_name": { [Op.like]: `%${userName}%` } })
    
      }
    
    
      let body = await userDao.userInfoPagination(json, (page - 1) * pageSize, pageSize);

      //获取当前数据表的总数量
      var totalNum = body.count;

      await ctx.render('user/userlist', {
        body:body.rows,
        totalPages: Math.ceil(totalNum / pageSize),  //总页数=总数量/每页显示的数量，有余数2.3这样的话向上取整变成3
        page: page,
        account: account,
        userName: userName
      })
      },

      add:async (ctx,next) => {

        const roleResult = await roleDao.getAllRole();

        await ctx.render('user/add',{          
          roleResult:roleResult
        });

      },

      doAdd:async (ctx,next) => {
        let body=ctx.request.body

        var solt = uuid.v4();
  
        var password = body.password;
        var md5Pass = await md5.MD5(password,solt);
        body.solt = solt;
        body.password=md5Pass;

        
  
        console.log(body);
        userDao.createUser(body)    
        await ctx.redirect('/users/userlist',{result:true})
        
        if (body.roleId) {

          await userDao.deleteUserRole(body.account)

          if (body.roleId instanceof Array) {

            for (var i = 0; i < body.roleId.length; i++) {

              await userDao.postUserRole(body.account, body.roleId[i])

            }

          } else {

            await userDao.postUserRole(body.account, body.roleId)

          }

        }
      },

      edit:async(ctx,next) => {

        //获取编辑的数据
        var account = ctx.request.query.account;
  
        const roleResult = await roleDao.getAllRole();
  
        var userResult = await userDao.getUserInfo(account);
  
        
        await ctx.render('user/edit',{
          userResult:userResult,
          roleResult:roleResult
        });
      },

      doEdit:async(ctx,next) => {

        //console.log(ctx.request.body);

         var editResult = ctx.request.body;

        //判断角色存不存在
        if (editResult.roleId) {

          await userDao.deleteUserRole(editResult.account)

          if (editResult.roleId instanceof Array) {

            for (var i = 0; i < editResult.roleId.length; i++) {

              await userDao.postUserRole(editResult.account, editResult.roleId[i])

            }

          } else {

            await userDao.postUserRole(editResult.account, editResult.roleId)

          }

        }

        if (editResult.password) {
            
          var solt = uuid.v4();

          editResult.password = await md5.MD5(editResult.password, solt);

          editResult.solt = solt;
         
        }else{
          var userInfo = await userDao.getUserInfo(editResult.account)
          
          editResult.password = userInfo.password;

          editResult.solt = userInfo.solt;      
                 
          await userDao.putUser(editResult);                    
          }
          await ctx.redirect('/users/userlist',{})
        },

      delect:async(ctx,next)=>{
        let b=ctx.params.b
        console.log(b)
        userDao.delectUser(b)
        await ctx.redirect('/user/userlist',{}) 
      },
}