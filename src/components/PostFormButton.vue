<template>
  <div>
    <div class="input-group">
      <b-btn v-b-modal="post ? 'modal' + post.id : 'new-post'" variant="success" class="form-control" :class="{'btn-sm': tiny}">{{ message }}</b-btn>
    </div>
    <!-- Modal Component -->
    <b-modal :id="post ? 'modal' + post.id : 'new-post'" ref="modal" title="Post" @ok="handleOk" @shown="startData">
      <form @submit.stop.prevent="handleSubmit">
        <b-container fluid>
          <b-row>
            <b-col sm="3"><label>Title </label></b-col>
            <b-col sm="9"><b-form-input type="text" v-model="edited_post.title"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col sm="3"><label>Description </label></b-col>
            <b-col sm="9"><b-form-textarea v-model="edited_post.description" :rows="3"></b-form-textarea></b-col>
          </b-row>
          <b-row>
            <b-col sm="3"><label>Likes </label></b-col>
            <b-col sm="9"><b-form-input type="number" v-model="edited_post.likes"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col sm="3"><label>Photo </label></b-col>
            <b-col sm="9"><b-form-file placeholder="Choose a file..." v-model="edited_post.photo"></b-form-file></b-col>
          </b-row>
        </b-container>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostFormButtonComponent',
  props: ['message', 'post', 'tiny', 'getPostsList', 'token_requests'],
  data () {
    return {
      edited_post: {
        id: null,
        title: '',
        description: '',
        likes: 0,
        photo: null
      }
    }
  },
  methods: {
    startData() {
      if (this.post) {
        this.edited_post.id = this.post.id
        this.edited_post.title = this.post.title
        this.edited_post.description = this.post.description
        this.edited_post.likes = this.post.likes
      }
    },
    clearData () {
      this.edited_post = {
        id: null,
        title: '',
        description: '',
        likes: 0,
        photo: null
      }
    },
    handleOk (evt) {
      evt.preventDefault()
      this.handleSubmit()
    },
    async handleSubmit () {
      var post;
      var postResponse;

      try {
        if (!this.post) {
          postResponse = await this.token_requests.post('posts/', this.edited_post)
          post = postResponse.data
        } else {
          postResponse = await this.token_requests.put('posts/' + this.post.id + '/', this.edited_post)
          post = postResponse.data
        }

        if (this.edited_post.photo) {
          await this.submitImage(post)
        }
      } catch(error) {
        throw error
      }

      if (!this.post) {
        this.clearData()
      }
      await this.getPostsList()
      this.$refs.modal.hide()
    },
    async submitImage (post) {
      const extra = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const formData = new FormData();
      formData.append('photo', this.edited_post.photo);

      try {
        var response = await this.token_requests.post('posts/' + post.id + '/upload_photo/', formData, extra)
        post.thumbnail = response.data.thumbnail
      } catch(error) {
        //
      }
    }
  }
}
</script>
