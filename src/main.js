import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Gravatar from 'vue-gravatar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('v-gravatar', Gravatar);
Vue.use(BootstrapVue);
Vue.use(Vuex)

Vue.config.productionTip = false


const store = new Vuex.Store({
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

new Vue({
  render: h => h(App),
  store
})
.$mount('#app')



