import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    clearToken (state) {
      state.token = null
    },
    setToken (state, payload) {
      state.token = payload.token
    }
  }
})
