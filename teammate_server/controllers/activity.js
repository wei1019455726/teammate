const activityDao =require('../service/activity_dao')

const db = require('../config/mysql_sequelize')

//引入sequelize对象
const Sequelize = db.sequelize

module.exports={
    activitylist:async (ctx,next)=>{
        let body=await activityDao.getAllActivity(); 
        await ctx.render('activity/activitylist', {body:body})
      },

      examine:async (ctx,next) => {
        var id = ctx.request.query.id;
        console.log(id)
        var activityResult = await activityDao.getActivityInfo(id);
        await ctx.render('activity/examine',{
          activityResult:activityResult,
        });

      },

      doExamine:async(ctx,next) => {

        console.log(ctx.request.body); 

        let id=ctx.request.body.id;
        
          let activityInfo = {
            
            activity_status : ctx.request.body.activity_status

        }
                   
          await activityDao.updateActivity(activityInfo,id);                    
          
          await ctx.redirect('/activitys/activitylist',{result:true})
        },
    

      add:async (ctx,next) => {

        await ctx.render('activity/add');

      },


      delect:async(ctx,next)=>{
        let b=ctx.params.b
        console.log(b)
        activityDao.delectActivity(b)
        await ctx.redirect('/activity/activitylist',{}) 
      },
}