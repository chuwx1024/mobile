import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: Number(window.localStorage.getItem('store-count')) || 0,
    user: getItem('user') || null
  },
  mutations: {
    increment (state) {
      state.count++
      window.localStorage.setItem('store-count', state.count)
    },
    // 用户登录
    setUser (state, data) {
      state.user = data
      setItem('user', state.user) // 本地存储
    }
  },
  actions: {
  },
  modules: {
  }
})
