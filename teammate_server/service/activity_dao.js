const {activity,user_activity} = require('../modules/index')

//数据库操作类
class activityDao {

    static async getActivityInfo(id) {
        return await activity.findOne({
            where: {
                id
            }
        })
    }

    static async getAllActivity(){
        return await activity.findAll({
            raw:true    //返回原始数据
        })
    }

    static async getAllUserActivity(){
        return await user_activity.findAll({
            raw:true    //返回原始数据
        })
    }

    static async createActivity(body){
        return await activity.create({
                activity_title: body.activity_title,
                activity_time: body.activity_time,
                activity_stime: body.activity_stime,
                activity_etime: body.activity_etime,
                activity_leader: body.activity_leader,
                activity_cleader: body.activity_cleader,
                activity_person: body.activity_person,
                activity_content: body.activity_content,
        })
    }


    static async updateActivity(body,id){
        return await activity.update({            
            activity_status: body.activity_status,
        }, {
            where: {
                id: id
            }
        })
        
    }

    static async delectActivity(body){
        return await activity.destroy({
            where:{
                activity_id:body
            }
        })
    }

   
    
 }

module.exports = activityDao
