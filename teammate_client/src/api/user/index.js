import api from '../index'
import urls from './urls'
export default {
  userinfo () {
    // return出去了一个promise
    return api.get(urls.userinfo)
  },


  postlogin (params) {
    // return出去了一个promise
    params={
      account:params.account,
      password:params.password
    }
      return api.post(urls.postlogin,params)
  },
  postregister(params){
    params={
    user_name:params.user_name,
    user_phone:params.user_phone,
    password:params.password,
    account:params.account
  }
    return api.post(urls.postregister,params)
  },

  putuser(params){
    params={
    user_name:params.user_name,
    nickname:params.nickname,
    user_phone:params.user_phone,
    user_school:params.user_school,
    user_major:params.user_major,
    user_experience:params.user_experience,
    user_introduce:params.user_introduce,
    user_age:params.user_age,
  }
    return api.put(urls.putuser,params)
  },

}
