/*
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-03 13:39:31
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
        name: '我的信息',
        path: 'myInfos',
        component: () => import(/* webpackChunkName: "about" */ '../views/MyInfos.vue')
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

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要进入的路由
  // from 即将离开的路由
  // next 是否同行 next(url)-重定向到url上 next()-继续访问to的路径

  if (to.path === '/login') return next();
  // 获取user
  const userFlag = window.sessionStorage.getItem('user'); // 取出当前用户
  if (!userFlag) return next('/login'); // userFlag没有值，则返回登录页

  // 符合要求-有user、同时访问的也不是/login 则放行
  next();
})

export default router
