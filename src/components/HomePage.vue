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
                <div class="col-md-6">
                  Posted on {{ postDate(post) }}, {{ post.likes }} like{{ (post.likes != 1) ? 's' : '' }}.
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-4">
                      <post-form-button-component message="update" :post="post" :tiny="true" :getPostsList="getPostsList" :token_requests="token_requests" />
                    </div>
                    <div class="col-md-4">
                      <div class="input-group">
                        <button type="button" class="form-control btn btn-primary btn-sm" @click="makeLike(post)">like</button>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="input-group">
                        <button type="button" class="form-control btn btn-danger btn-sm" @click="deletePost(post)">delete</button>
                      </div>
                    </div>
                  </div>
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
              <post-form-button-component message="Create post" :post="null" :tiny="false" :getPostsList="getPostsList" :token_requests="token_requests" />
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
                    <span class="name">Agent Smith</span>
                  </div>
                </li>
                <li>
                  <div class="user-header">
                    <v-gravatar email="friend_2@example.com" class="photo" />
                    <span class="name">Mr Anderson</span>
                  </div>
                </li>
                <li>
                  <div class="user-header">
                    <v-gravatar email="friend_3@example.com" class="photo" />
                    <span class="name">Morpheus</span>
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
  import consts from '../consts'
  import NavbarComponent from './Navbar.vue'
  import FooterComponent from './Footer.vue'
  import PostFormButtonComponent from './PostFormButton.vue'
  import '../assets/less/homepage.less'

  export default {
    name: 'HomePageComponent',
    data() {
      return {
        user: {},
        posts: [],
        token_requests: null
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
          const user = await this.token_requests.get('/auth/current-user/')
          this.user = user.data
        } catch(error) {
          throw error
        }

      },
      async getPostsList() {
        try {
          const posts = await this.token_requests.get('/posts/')
          this.posts = posts.data;
        } catch(error) {
          throw error
        }
      },
      async deletePost(post) {
        try {
          await this.token_requests.delete('/posts/' + post.id + '/')
          await this.getPostsList()

        } catch(error) {
          throw error
        }
      },
      async makeLike(post) {
        try {
          await this.token_requests.post('/posts/' + post.id + '/like/')
          await this.getPostsList()

        } catch(error) {
          throw error
        }
      },
      thumbnailUrl(post) {
        return 'http://' + consts.domain + '' + post.thumbnail
      },
      postDate(post) {
        return moment(post.created_at).format('MMM D, YYYY')
      }
    },
    mounted() {
      const token = localStorage.getItem('token') || this.$store.state.token

      this.token_requests = axios.create({
        baseURL: 'http://' + consts.domain + '/api',
        headers: {'Authorization': 'Token ' + token}
      });

      this.getUserData()
      this.getPostsList()
    }
  }
</script>
