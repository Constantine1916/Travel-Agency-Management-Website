/*
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 10:43:21
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-02 21:13:08
 * @FilePath     : \travel-agency-management-website\src\main.js
 */
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import '@/assets/css/common.css' // 引入公共样式
import axios from 'axios'
import '@/assets/iconfont/iconfont.css' // 引入iconfont图标

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:9000'

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
