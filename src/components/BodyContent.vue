<template>
  <div>
    <navbar-component />

    <login-component v-if="!isUserLoggedin" />
    <home-page-component v-if="isUserLoggedin" />

    <footer-component />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NavbarComponent from './Navbar.vue'
  import HomePageComponent from './HomePage.vue'
  import LoginComponent from './Login.vue'
  import FooterComponent from './Footer.vue'
  import '../assets/less/homepage.less'

  export default {
    name: 'BodyContent',
    components: {
      NavbarComponent,
      HomePageComponent,
      LoginComponent,
      FooterComponent
    },
    computed: mapState({
      isUserLoggedin: state => state.user != null
    })
  }
</script>
