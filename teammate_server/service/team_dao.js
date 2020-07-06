const db = require('../config/mysql_sequelize')

const {activity,team,user_activity,task,user,square,schedule} = require('../modules/index')
var Sequelize = require('sequelize-values')();
//数据库操作类
class teamDao {
    //新增队伍信息
    static async createActivity(params) {
        return await activity.create({
           announce_id:params.id,
           activity_title:params.activity_title,
           activity_stime:params.activity_stime,
           activity_etime:params.activity_etime,
           activity_leader:params.activity_leader,
           activity_cleader:params.activity_cleader,
           activity_person:params.activity_person,
           activity_content:params.activity_content,
           activity_status:0,

        })
    }  

        //新增用户活动表(队长)
        static async postUserActivityLeader(account, id) {
            return await user_activity.create({
                account: account,
                activity_id: id + 1,
                user_status: 2,
                status: 1
            })
        }

    //新增用户活动表（队员）
    static async postUserActivity(account,id){
        return await user_activity.create({
            account:account,
            activity_id:id,
            user_status:3,
            status:0,         
        })
    }
    

     //获取活动信息
     static async getActivityInfo() {
        return await activity.findAll({
            raw:true    //返回原始数据
        })
    }

    static async getAllactivity(announce_id){
        return await activity.findAll({ 
            where:{
                announce_id
            },   
            raw:true    //返回原始数据
        }).then(function (activity) {
            return Sequelize.getValues(activity);
        })
    }

    static async getTeaminfo(announce_id){
        return await team.findAll({
            where:{
                announce_id
            },
                                
            raw:true    //返回原始数据
        })
    }

    static async getOneteam(id){
        return await activity.findOne({
            where:{
                id
            },
                                
            raw:true    //返回原始数据
        })
    }

    static async createTeam(data){
        return await team.create({
            announce_id:data.id
           
        })
    }

//获取队伍
    static async getUseractivity(account){
        return await user_activity.findAll({
            where:{
                account
            },include:{
                model:activity
            }
          }).then(function (user_activity) {
            return Sequelize.getValues(user_activity);
        })                                               
    }

        //新增任务信息
        static async postTask(params) {
            return await task.create({
                user_name:params.user_name,
                task_stime:params.task_stime,
                task_etime:params.task_etime,
                content:params.content,
                activity_id:params.id,
                task_status:1
            })
        } 

        //修改任务      
        static async putTask(params) {
            return await task.update({
                user_name:params.user_name,
                task_stime:params.task_stime,
                task_etime:params.task_etime,
                content:params.content,
            }, {
                where: {
                    id: params.id
                }
            }
            )
        } 

        //获取任务信息
        static async getTask(activity_id){
            return await task.findAll({
                where:{
                    activity_id
                },
                                    
                raw:true    //返回原始数据
            })
        }
       //删除任务
        static async delecttask(msg) {
            return await task.destroy({
                where: {
                    id: msg
                }
            })
        }
        //删除队员
        
        static async deleteteammate(msg) {
            return await user_activity.destroy({
                where: {
                    id: msg
                }
            })
        }

        //获取队伍队员
        static async getTeamuser(activity_id){
            return await user_activity.findAll({
                where:{
                    activity_id
                },
                include:[{
                    model:user
                }]                           
            }).then(function (user_activity) {
                return Sequelize.getValues(user_activity);
            })    
        }
        //审核队员
        static async putUserInfo(id) {
            return await user_activity.update({
                status:1                   
            },{
                where:{
                    id
                }
            })
        }
        //完成任务
        static async puttaskInfo(id) {
            return await task.update({
                task_status:2                   
            },{
                where:{
                    id
                }
            })
        }
        //添加广场信息
        
        static async postsquareinfo(params) {
            return await square.create({
                content:params.content,
                user_name:params.user_name,
                account:params.account,
                square_time:params.suqare_time,
                square_photo:params.square_photo             
            })
        } 

        //获取广场信息
        
        static async getsquare(){
            return await square.findAll({
            })
        }
        //获取日程
        
        static async getschedule(account){
            return await schedule.findAll({
                where:{
                    account
                }
              })                                           
        }


 }

module.exports = teamDao
