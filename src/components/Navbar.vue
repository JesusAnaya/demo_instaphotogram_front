
<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Insta-PHOTO-gram</a>

        <button class="btn nav-link" @click="logoutUser">Logout</button>
      </div>
    </nav>
</template>

<script>
  import { mapMutations } from 'vuex'
  import '../assets/less/navbar.less'

  export default {
    name: 'NavbarComponent',
    props: ['user'],
    methods: {
      ...mapMutations([
        'logoutUser'
      ])
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
