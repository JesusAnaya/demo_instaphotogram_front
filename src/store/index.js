import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: {
      full_name: 'Jesus Armando',
      email: 'jesus.anaya.dev@gmail.com'
    }
  },
  mutations: {
    logoutUser (state) {
      state.user = null
    },
    loginUser (state, payload) {
      state.user = payload.user
    }
  }
})
