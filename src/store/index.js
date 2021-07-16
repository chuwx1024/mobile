import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: Number(window.localStorage.getItem('store-count')) || 0
  },
  mutations: {
    increment (state) {
      state.count++
      window.localStorage.setItem('store-count', state.count)
    }
  },
  actions: {
  },
  modules: {
  }
})
