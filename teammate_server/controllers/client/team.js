const teamDao =require('../../service/team_dao')
const userDao =require('../../service/user_dao')
const fs = require('fs')
module.exports={  
      //创建活动
      postactivity:async(ctx,next)=>{

        const data = ctx.request.body          
        teamDao.createActivity(data)
        let account= ctx.state.user.account

        var allActivity = await teamDao.getActivityInfo();
        var newId = allActivity[allActivity.length - 1 ].id;
        await teamDao.postUserActivityLeader(account, newId);    
        ctx.status = 200
    },

    //报名活动
    postTeam:async(ctx,next)=>{
      const activity_id = ctx.request.body.id; 
      let account= ctx.state.user.account
      await teamDao.postUserActivity(account,activity_id);
      ctx.status = 200
  },

    //获取全部活动信息
    activityinfo:async (ctx,next)=>{
      const id = ctx.request.query.id;
      let activity = await teamDao.getAllactivity(id)
      ctx.status = 200
      ctx.body = {
        data: activity
      }        
      },
      //获取单个活动信息
      teaminfo:async (ctx,next)=>{
        const id = ctx.request.query.id;
        let team = await teamDao.getOneteam(id)
        ctx.status = 200
        ctx.body = {
          data: team
        }        
        },

        //获取队伍活动信息
        useractivityinfo:async (ctx,next)=>{
          const account= ctx.state.user.account
          let useractivity = await teamDao.getUseractivity(account)
          ctx.status = 200
          ctx.body = {
            data: useractivity
          }        
          },

    //创建任务   
    postTask:async(ctx,next)=>{
      const data = ctx.request.body          
      await teamDao.postTask(data);
      ctx.status = 200
  },

  //修改任务
  putTask:async(ctx,next)=>{
    const data = ctx.request.body          
    await teamDao.putTask(data);
    ctx.status = 200
},

  //获取任务
  getTask:async (ctx,next)=>{
    const id = ctx.request.query.id;
    let task = await teamDao.getTask(id)
    ctx.status = 200
    ctx.body = {
      data: task
    }        
    },
    //删除任务
    deletetask:async(ctx) => {
      const msg = ctx.params.id;
      await teamDao.delecttask(msg);
      ctx.status = 200;      
  },
//删除队员
  deleteteammate:async(ctx) => {
    const msg = ctx.params.id;
    await teamDao.deleteteammate(msg);
    ctx.status = 200;      
},

  //获取队伍队员
  getTeamuser:async (ctx,next)=>{
    const id = ctx.request.query.id;
    let user = await teamDao.getTeamuser(id)
    ctx.status = 200
    ctx.body = {
      data: user
    }        
    },  

    //获取个人信息
    getuserinfo:async (ctx,next)=>{
      const id = ctx.request.query.id;
      let data = await userDao.getUserInfo(id)
      ctx.status = 200
      ctx.body = {
        data: data
      }        
      },

      //审核队员
      teammateshenhe:async (ctx,next)=>{
        const id = ctx.request.query.id;
        await teamDao.putUserInfo(id)
        ctx.status = 200           
        }, 
        //完成任务
        taskok:async (ctx,next)=>{
          const id = ctx.request.query.id;
          await teamDao.puttaskInfo(id)
          ctx.status = 200           
          }, 
//添加广场信息
          postsquareinfo:async(ctx,next)=>{
            if (ctx.request.body.square_photo) {
              let base64Data = ctx.request.body.square_photo.replace(/^data:image\/\w+;base64,/, "");
              let dataBuffer = Buffer.from(base64Data, 'base64');
              let getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now();
              let upload = await new Promise((reslove, reject) => {
                  fs.writeFile('./public/client/upload/' + getName + '.png' , dataBuffer, err => {
                      if (err) {
                          throw err;
                          reject(false);
                      };
                      reslove(true)
                      console.log("头像上传成功")
                  });
              });
              if (upload) {
                let square_photo = getName + '.png';
                let account= ctx.state.user.account
                let user_name= ctx.state.user.user_name
                let square_time = new Date()
                let content = ctx.request.body.content
                let json = {account,user_name,square_time,content,square_photo};
                console.log(json)         
                await teamDao.postsquareinfo(json);
                ctx.status = 200
                
             }
      }
          
        },
       //获取广场信息
        getsquare:async (ctx,next)=>{
          let square = await teamDao.getsquare()
          ctx.status = 200
          ctx.body = {
              data: square
          }     
          },
//获取日程
         
            getschedule:async (ctx,next)=>{
              const account= ctx.state.user.account
              let schedule = await teamDao.getschedule(account)
              console.log(schedule)
              ctx.status = 200
              ctx.body = {
                data: schedule
              }        
              },

}

      
   


 