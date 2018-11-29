
<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Insta-PHOTO-gram</a>

        <button v-if="isUserLoggedIn" class="btn nav-link" @click="logout">Logout</button>
      </div>
    </nav>
</template>

<script>
  import '../assets/less/navbar.less'

  export default {
    name: 'NavbarComponent',
    methods: {
      logout() {
        localStorage.clear()
        this.$router.push('/login')
      }
    },
    computed: {
      isUserLoggedIn() {
        return localStorage.getItem('token') != null
      }
    }
  }
</script>

<style>
  @font-face {
    font-family: 'Billabong';
    src: url('../assets/fonts/Billabong.ttf');
    font-weight: bold;
    font-style: italic;
  }
</style>
