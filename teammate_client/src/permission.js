import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import('nprogress/nprogress.css')
import { getLocalStorage } from '@/utils/localStorage' // 验权(从localstorage中获取)
import {
  setTitle
} from '@/utils/mUtils' // 设置浏览器头部标题
import api from './api/apiList'

const whiteList = ['/login','/register']
 
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 点击登录时，拿到了token并存入了localstorage,保证页面刷新时,始终可以拿到token
  if (getLocalStorage('Token')) {
    if(to.path === '/main') {
      next({path:'/'})  
      NProgress.done() 
    } else {
      api.user.userinfo().then(res =>{
          let user = res.data.user;              
          store.commit("user/SET_USERNAME",user.user_name);
          store.commit("user/SET_ACCOUNT",user.account);
          store.commit("user/SET_USERPHONE",user.user_phone);
          store.commit("user/SET_USERSEX",user.user_sex);
          // store.commit("user/SET_ROLENAME",user.user.roles[0].role_name);       
          next()
      },  
      )  
      .catch((err)=>{
        console.log(err)
        store.dispatch('user/LogOut').then(() => {
          next({ path: '/' })
        })
      })
      

    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 点击退出时,会定位到这里
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})

