<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Insta-PHOTO-gram</a>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container">

      <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-8">

          <div class="user-header">
            <v-gravatar email="jesus.anaya.dev@gmail.com" class="photo" />
            <span class="name">Jesus Armando</span>
          </div>

          <!-- Blog Post -->
          <div class="card mb-4 card-post">
            <img class="card-img-top" src="http://placehold.it/614x425" alt="Card image cap">
            <div class="card-body">
              <h2 class="card-title">Post Title</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            </div>
            <div class="card-footer text-muted">
              Posted on January 1, 2017
            </div>
          </div>

        </div>

        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

          <!-- Create Widget -->
          <div class="card my-4">
            <h5 class="card-header">Add new post</h5>
            <div class="card-body">
              <div class="input-group">
                <button class="form-control btn btn-primary" type="button">Create</button>
              </div>
            </div>
          </div>

          <!-- Stories Widget -->
          <div class="card my-4">
            <h5 class="card-header">Stories</h5>
            <div class="card-body">
              <ul>
                <li>Story 1 ...</li>
                <li>Story 2 ...</li>
                <li>Story 3 ...</li>
                <li>Story 4 ...</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <footer-component/>
  </div>
</template>

<script>
  import '../assets/less/homepage.less'
  import FooterComponent from './Footer.vue'

  export default {
    components: {
      FooterComponent
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
