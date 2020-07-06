const {announce} = require('../modules/index')

//数据库操作类
class announceDao {

    static async getAnnounceInfo(id) {
        return await announce.findOne({
            where: {
                id
            }
        })
    }

    static async getAllAnnounce(){
        return await announce.findAll({
            raw:true    //返回原始数据
        })
    }


    //新增通告
    static async postAnnounce(announceInfo) {
        return await announce.create({
                announce_title: announceInfo.announce_title,
                announce_time: announceInfo.announce_time,
                announce_status: announceInfo.announce_status,
                announce_content: announceInfo.announce_content,
                announce_sperson: announceInfo.announce_sperson,
                announce_phone: announceInfo.announce_phone,
                announce_photo: announceInfo.announce_photo,
        })
    }

    //编辑通告
    static async putAnnounce(announceInfo,id) {
        return await announce.update({
                announce_title: announceInfo.announce_title,
                announce_time: announceInfo.announce_time,
                announce_status: announceInfo.announce_status,
                announce_content: announceInfo.announce_content,
                announce_sperson: announceInfo.announce_sperson,
                announce_phone: announceInfo.announce_phone,
                announce_photo: announceInfo.announce_photo,
        },{
            where: {
                id: id
            }
        })
    }



    static async delectAnnounce(body){
        return await announce.destroy({
            where:{
                id:body
            }
        })
    }

   
    
 }

module.exports = announceDao