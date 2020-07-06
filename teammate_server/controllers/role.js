const roleDao =require('../service/role_dao')

module.exports={
    rolelist:async (ctx,next)=>{
        let body=await roleDao.getAllRole(); 
        await ctx.render('role/rolelist', {body:body})
      },

      add:async (ctx,next) => {

        await ctx.render('role/add');

      },

      doAdd:async (ctx,next) => {
        var addResult = ctx.request.body;
            
      // console.log(addResult);

      var oneRoleInfo = await roleDao.getOneRoleInfo(addResult.role_name,'');

      if(oneRoleInfo){
          
            console.log('该角色已经存在')
            await ctx.redirect('/roles/add',{result:true}) 

      }else{

            if (addResult.role_name && addResult.description) {

                  await roleDao.postRole(addResult);                
                  console.log('新增角色成功')
                  await ctx.redirect('/roles/rolelist',{result:true})
            } else {

                  console.log('请输入角色名和角色描述')
                  await ctx.redirect('/roles/add',{result:true})

            }

      }

      },

      delect:async(ctx,next)=>{
        let b=ctx.params.b
        console.log(b)
        roleDao.delectRole(b)
        await ctx.redirect('/roles/rolelist',{}) 
      },
}