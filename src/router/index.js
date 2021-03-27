/*
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-03-28 01:53:18
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
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        name: 'accountManage',
        path: 'accountManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/AccountManage.vue')
      },
      {
        name: 'travelAgencyInfoManage',
        path: 'travelAgencyInfoManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/TravelAgencyInfoManage.vue')
      },
      {
        name: 'financialStatements',
        path: 'financialStatements',
        component: () => import(/* webpackChunkName: "about" */ '../views/FinancialStatements.vue')
      },
      {
        name: 'scenicSpotTicket',
        path: 'scenicSpotTicket',
        component: () => import(/* webpackChunkName: "about" */ '../views/ScenicSpotTicket.vue')
      },
      {
        name: 'scenicSpotNumber',
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
