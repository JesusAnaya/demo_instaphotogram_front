<template>
  <div>
    <navbar-component />

    <!-- Page Content -->
    <div class="container">

      <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-8">

          <div class="user-header">
            <v-gravatar :email="email" class="photo" />
            <span class="name">{{ user.username }}</span>
          </div>

          <!-- Blog Post -->
          <div class="card mb-4 card-post" v-for="(post, index) in posts" :key="index">

            <img v-if="post.thumbnail" class="card-img-top" :src="thumbnailUrl(post)" alt="Card image cap">
            <img v-if="!post.thumbnail" class="card-img-top" src="http://placehold.it/614x425" alt="Card image cap">

            <div class="card-body">
              <h2 class="card-title">{{ post.title }}</h2>
              <p class="card-text">{{ post.description }}</p>
            </div>
            <div class="card-footer text-muted">
              <div class="row">
                <div class="col-md-10">
                  Posted on {{ postDate(post) }}
                </div>
                <div class="col-md-2">
                  <post-form-button-component message="update" :post="post" :tiny="true" :getPostsList="getPostsList" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

          <!-- Create Widget -->
          <div class="card my-4">
            <h5 class="card-header">Add new post</h5>
            <div class="card-body">
              <post-form-button-component message="Create post" :post="null" :tiny="false" :getPostsList="getPostsList" />
            </div>
          </div>

          <!-- Stories Widget -->
          <div class="card my-4">
            <h5 class="card-header">Stories</h5>
            <div class="card-body">
              <ul class="friends">
                <li>
                  <div class="user-header">
                    <v-gravatar email="friend_1@example.com" class="photo" />
                    <span class="name">friend_user_1</span>
                  </div>
                </li>
                <li>
                  <div class="user-header">
                    <v-gravatar email="friend_2@example.com" class="photo" />
                    <span class="name">friend_user_2</span>
                  </div>
                </li>
                <li>
                  <div class="user-header">
                    <v-gravatar email="friend_3@example.com" class="photo" />
                    <span class="name">friend_user_3</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <footer-component />
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import NavbarComponent from './Navbar.vue'
  import FooterComponent from './Footer.vue'
  import PostFormButtonComponent from './PostFormButton.vue'
  import '../assets/less/homepage.less'

  const token = localStorage.getItem('token')

  const token_requests = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {'Authorization': 'Token ' + token}
  });

  export default {
    name: 'HomePageComponent',
    data() {
      return {
        user: {},
        posts: []
      }
    },
    components: {
      NavbarComponent,
      FooterComponent,
      PostFormButtonComponent
    },
    computed: {
      email() {
        return this.user.username + '@example.com'
      }
    },
    methods: {
      async getUserData() {
        try {
          const user = await token_requests.get('/auth/current-user/')
          this.user = user.data
        } catch(error) {
          throw error
        }

      },
      async getPostsList() {
        try {
          const posts = await token_requests.get('/posts/')
          this.posts = posts.data;
        } catch(error) {
          throw error
        }
      },
      thumbnailUrl(post) {
        return 'http://localhost:8000' + post.thumbnail
      },
      postDate(post) {
        return moment(post.created_at).format('MMM D, YYYY')
      }
    },
    mounted() {
      this.getUserData()
      this.getPostsList()
    }
  }
</script>
