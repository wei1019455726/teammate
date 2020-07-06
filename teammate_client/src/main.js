import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'babel-polyfill'
import '@/permission' // permission control
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import VueResource from 'vue-resource'
import '../public/font/iconfont.css'
import elTableInfiniteScroll from 'el-table-infinite-scroll';

Vue.use(elTableInfiniteScroll);
Vue.use(VueResource)
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(Mint);
Vue.use(ElementUI);
import api from './api/install'
Vue.use(api)
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
