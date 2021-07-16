import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: Number(window.localStorage.getItem('store-count')) || 0,
    user: null
  },
  mutations: {
    increment (state) {
      state.count++
      window.localStorage.setItem('store-count', state.count)
    },
    // 用户登录
    setUser (state, data) {
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
