import {getLocalStorage, removeLocalStorage } from '@/utils/localStorage'


const user  = {
  namespaced: true,
  state : {
    user_name:'',
    token: '',
    role_name:'',
    account: '',
    user_sex:'',
    user_phone:'',   
    browserHeaderTitle: getLocalStorage('browserHeaderTitle') || 'GAMER MIS',
    currentannounce:{},//返回当前通告
  },
  getters : {
    token: state => state.token,
    role_name: state => state.role_name,
    user_name: state => state.user_name,
    account: state => state.account,
    user_sex: state => state.user_sex,
    user_phone: state => state.user_phone,
    browserHeaderTitle: state => state.browserHeaderTitle,
  },
  mutations: {
    SET_ROLENAME: (state, role_name) => {
        state.role_name = role_name
    },
    SET_BROWSERHEADERTITLE: (state, action) => {
        state.browserHeaderTitle = action.browserHeaderTitle
    },
    SET_USERNAME: (state, user_name) => {
      state.user_name = user_name
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERSEX: (state, user_sex) => {
      state.user_sex = user_sex
    },
    SET_USERPHONE: (state, user_phone) => {
      state.user_phone = user_phone
    },
    vm_getCurrentAnnounce:function(state, val) { //获取当前通告
      state.currentannounce = val
  },
  },
  actions:{
    va_getCurrentAnnounce:function ({commit}, params) {
      api.getOneAnnounce(params).then(res => {
          commit('vm_getCurrentAnnounce',res.announce)
      })
  },
      //登出
      LogOut() {
        return new Promise((resolve, reject) => {
          removeLocalStorage('Token')
          resolve()
        })
      },

      
  }
}


export default user;



/**
 * 1、用户退出,需要调取后台接口吗？后台具体的业务逻辑是什么？
 * 
 * 
 */