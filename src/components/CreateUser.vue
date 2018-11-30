<template>
  <div>
    <b-btn v-b-modal.createAcountModal class="btn btn-light btn-lg btn-block">Create account</b-btn>

    <!-- Modal Component -->
    <b-modal id="createAcountModal" ref="modal" title="Create new account" @ok="handleOk" @shown="clearData">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter username" v-model="username"></b-form-input>
        <b-form-input type="password" placeholder="Password" v-model="password"></b-form-input>
        <small id="passwordHelpBlock" class="form-text text-muted">
          Your password must be 6-20 characters long.
        </small>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import consts from '../consts'

const requests = axios.create({
  baseURL: 'http://' + consts.domain + '/api',
});

export default {

  name: 'CreateUserComponent',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    clearData () {
      this.username = ''
      this.password = ''
    },
    handleOk (evt) {
      evt.preventDefault()

      if (!this.username || !this.password) {
        alert('Please enter your username and password')

      } else if (this.password.length < 6) {
        alert('Password is too short')

      } else {
        this.handleSubmit()
      }
    },
    async handleSubmit () {
      const body = {username: this.username, password: this.password}

      try {
        const user = await requests.post('/auth/create-user/', body)
        this.$store.commit('loginUser', {user: user.data})

        const session = await requests.post('/auth/api-token/', body)

        this.$store.commit('setToken', {token: session.data.token})
        localStorage.setItem('token', session.data.token)

        this.clearData()
        this.$refs.modal.hide()

        this.$router.push('/')

      } catch(error) {
        throw error
      }
    }
  }
}
</script>
