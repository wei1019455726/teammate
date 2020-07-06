import api from '../index'
import urls from './urls'
export default {
  postactivity (params,id) {
        params = {          
           activity_title:params.activity_title,
           activity_stime:params.activity_stime,
           activity_etime:params.activity_etime,
           activity_leader:params.activity_leader,
           activity_cleader:params.activity_cleader,
           activity_person:params.activity_person,
           activity_content:params.activity_content,
           id:id
        }
        // return出去了一个promise
        return api.post(urls.postactivity,params)
      },
     
      activityinfo (params) {
        params = {
          id: params
      }
        // return出去了一个promise
        return api.get(urls.activityinfo,params)
      },

      //获取队伍队员
      getTeamuser (params) {
        params = {
          id: params
      }
        // return出去了一个promise
        return api.get(urls.getTeamuser,params)
      },
//报名活动
      postTeam (params) {
        params = {
          id: params
      }
        // return出去了一个promise
        return api.post(urls.postTeam,params)
      },
      teaminfo (params) {
        params = {
          id: params
      }
        // return出去了一个promise
        return api.get(urls.teaminfo,params)
      },

      useractivityinfo(){
        return api.get(urls.useractivityinfo);
      },
//创建任务
      postTask (params,id) {
        params = {          
        user_name:params.user_name,
        task_stime:params.task_stime,
        task_etime:params.task_etime,
        content:params.content,
        id:id
        }
        // return出去了一个promise
        return api.post(urls.postTask,params)
      },
//获取任务
      getTask (params) {
        params = {
          id: params
      }
        // return出去了一个promise
        return api.get(urls.getTask,params)
      },
      //修改任务
      putTask(params,id) {
        params = {
          id: id,
          user_name: params.user_name,       
          task_stime: params.user_name,
          task_etime: params.user_name,      
          content: params.user_name
      }
        // return出去了一个promise
        return api.put(urls.putTask,params)
      },
//删除任务
      deletetask(params) {
        // return出去了一个promise
        params = {
          id: params
        }
        return api.delete(urls.deletetask + '/' + params.id)
      },
      //删除队员
      deleteteammate(params) {
        // return出去了一个promise
        params = {
          id: params
        }
        return api.delete(urls.deleteteammate + '/' + params.id)
      },
      //审核队员      
      teammateshenhe(params) {
        // return出去了一个promise
        params = {
          id: params
        }
        return api.get(urls.teammateshenhe,params)
      },
      //完成任务
      taskok(params) {
        // return出去了一个promise
        params = {
          id: params
        }
        return api.get(urls. taskok,params)
      },
//获取个人信息
      getuserinfo (params) {
        params = {
          id: params
      }
        // return出去了一个promise
        return api.get(urls.getuserinfo,params)
      },
//添加广场信息
      postsquareinfo(params) {
        params = {
        content: params.content,
        square_photo :params.square_photo
      }
        // return出去了一个promise
        return api.post(urls.postsquareinfo,params)
      },
//获取广场信息
      getsquare () {
        // return出去了一个promise
        return api.get(urls.getsquare)
      },
//获取日程
      getschedule () {
        // return出去了一个promise
        return api.get(urls. getschedule)
      },

      

}
