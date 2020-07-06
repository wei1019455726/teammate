const announceDao =require('../../service/announce_dao')

module.exports={  
      //获取全部比赛信息
    announceinfo:async (ctx,next)=>{
    let announce = await announceDao.getAllAnnounce()
    ctx.status = 200
    ctx.body = {
      data: announce
    }        
    },
    //获取单个比赛信息
    getOneAnnounce:async (ctx,next)=>{
      const id = ctx.request.query.id;
      let announce = await announceDao.getAnnounceInfo(id)
      ctx.status = 200
      ctx.body = {
        data: announce,
      }        
      },
}

      
   


 