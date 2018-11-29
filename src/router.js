import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageComponent from './components/HomePage.vue'
import LoginComponent from './components/Login.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      name: 'home-page',
      path: '/',
      component: HomePageComponent,
      beforeEnter: (to, from, next) => {
        if(!localStorage.getItem('token')) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      name: 'login-page',
      path: '/login',
      component: LoginComponent,
      beforeEnter: (to, from, next) => {
        if(localStorage.getItem('token')) {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})

export default router
