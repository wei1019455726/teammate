// const teamDao =require('../service/team_dao')

module.exports={
    teamlist:async (ctx,next)=>{
        await ctx.render('team/teamlist')
      },

      task:async (ctx,next)=>{
        await ctx.render('team/task')
      },

      message:async (ctx,next)=>{
        await ctx.render('team/message')
      },
   
}