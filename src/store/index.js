import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    logoutUser (state) {
      state.user = {}
    },
    loginUser (state, payload) {
      state.user = payload.user
    }
  }
})
