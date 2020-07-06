const announceDao =require('../service/announce_dao')
const fs = require('fs')
module.exports={
    announcelist:async (ctx,next)=>{
        let body=await announceDao.getAllAnnounce(); 
        await ctx.render('announce/announcelist', {body:body})
      },

      add:async (ctx,next) => {

        await ctx.render('announce/add');

      },

      doAdd:async (ctx,next) => {

        if(ctx.request.body.announce_photoVal){

            let base64Data = ctx.request.body.announce_photoVal.replace(/^data:image\/\w+;base64,/,"");
            let dataBuffer = Buffer.from(base64Data,'base64');
            let getName = Number(Math.random().toString().substr(3)).toString(36)+Date.now();
            let upload = await new Promise((reslove, reject) => {
              fs.writeFile('./public/uploads/' + getName + '.png', dataBuffer, err => {
                 if(err) {
                   throw err;
                   reject(false);
                 };
                 reslove(true)
                 console.log("图片上传成功")
              });
            });

        if(upload) {
        let announce_time = ctx.request.body.announce_time.replace(/\//g,"\-");//把所有的 / 替换为-，
        let announce_title = ctx.request.body.announce_title;
        let announce_status = ctx.request.body.announce_status;
        let announce_content = ctx.request.body.announce_content;
        let announce_sperson = ctx.request.body.announce_sperson;
        let announce_phone = ctx.request.body.announce_phone;
        let announce_photo =  getName + '.png';
          let addResult = {
            announce_title, announce_time,announce_status,announce_photo, announce_content,announce_sperson,announce_phone
        };
        console.log(addResult);

        await announceDao.postAnnounce(addResult);
        // console.log(addResult);      
        await ctx.redirect('/announces/announcelist',{})

            }

          }
      },

      edit:async(ctx,next) => {
         
        const id = ctx.request.query.id;

        const result = await announceDao.getAnnounceInfo(id);

        await ctx.render('announce/edit',{
            result:result
        });
    },

    doEdit:async(ctx,next) => {
      if(ctx.request.body.announce_photoVal){
        let base64Data = ctx.request.body.announce_photoVal.replace(/^data:image\/\w+;base64,/,"");
        let dataBuffer = Buffer.from(base64Data,'base64');
        let getName = Number(Math.random().toString().substr(3)).toString(36)+Date.now();
        let upload = await new Promise((reslove, reject) => {
          fs.writeFile('./public/uploads/' + getName + '.png', dataBuffer, err => {
             if(err) {
               throw err;
               reject(false);
             };
             reslove(true)
             console.log("图片上传成功")
          });
        });

    if(upload) {
    let id = ctx.request.body.id;
    let announce_time = ctx.request.body.announce_time.replace(/\//g,"\-");//把所有的 / 替换为-，
    let announce_title = ctx.request.body.announce_title;
    let announce_content = ctx.request.body.announce_content;
    let announce_sperson = ctx.request.body.announce_sperson;
    let announce_phone = ctx.request.body.announce_phone;
    let announce_photo =  getName + '.png';
      let json = {
        announce_title, announce_time,announce_photo, announce_content,announce_sperson,announce_phone
    };
    await announceDao.putAnnounce(json, id);
    // console.log(addResult);      
    await ctx.redirect('/announces/announcelist',{})

        }

      }

    },

      delect:async(ctx,next)=>{
        let b=ctx.params.b
        console.log(b)
        announceDao.delectAnnounce(b)
        await ctx.redirect('/announces/announcelist',{}) 
      },
}