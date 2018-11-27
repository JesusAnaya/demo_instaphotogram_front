import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageComponent from './components/HomePage.vue'
import LoginComponent from './components/Login.vue'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      name: 'home-page',
      path: '/',
      component: HomePageComponent
    },
    {
      name: 'login-page',
      path: '/login',
      component: LoginComponent
    }
  ]
})
