const activityDao =require('../service/activity_dao')

module.exports={
    myselflist:async (ctx,next)=>{
        let body=await activityDao.getAllUserActivity(); 
        await ctx.render('myself/myselflist', {body:body})
      },

      schedel:async (ctx,next)=>{

        await ctx.render('myself/schedel')
      },
      
      delect:async(ctx,next)=>{
        let b=ctx.params.b
        console.log(b)
        activityDao.delectActivity(b)
        await ctx.redirect('/activity/activitylist',{}) 
      },
}