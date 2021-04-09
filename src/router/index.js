/*
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-09 17:17:39
 * @FilePath     : \travel-agency-management-website\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: '登录',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
    children: [
      {
        name: '首页',
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        name: '账号管理',
        path: 'accountManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/AccountManage.vue')
      },
      {
        name: '旅行社信息管理',
        path: 'travelAgencyInfoManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/TravelAgencyInfoManage.vue')
      },
      {
        name: '旅行社财务报表',
        path: 'financialStatements',
        component: () => import(/* webpackChunkName: "about" */ '../views/FinancialStatements.vue')
      },
      {
        name: '景区门票设置',
        path: 'scenicSpotTicket',
        component: () => import(/* webpackChunkName: "about" */ '../views/ScenicSpotTicket.vue')
      },
      {
        name: '查看景区人数',
        path: 'scenicSpotNumber',
        component: () => import(/* webpackChunkName: "about" */ '../views/ScenicSpotNumber.vue')
      },
      {
        path: '*',
        redirect: '/home' // 错误路由重定向
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
