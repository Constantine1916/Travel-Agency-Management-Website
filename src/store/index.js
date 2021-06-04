/*
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-03 12:08:30
 * @FilePath     : \travel-agency-management-website\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: null,
  },
  mutations: {
    updateId(state, id) {
      state.id = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
