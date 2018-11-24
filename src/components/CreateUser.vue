<template>
  <div>
    <b-btn v-b-modal.createAcountModal class="btn btn-light btn-lg btn-block">Create account</b-btn>

    <!-- Modal Component -->
    <b-modal id="createAcountModal" ref="modal" title="Create new account" @ok="handleOk" @shown="clearData">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="email" placeholder="Enter your email" v-model="email"></b-form-input>
        <b-form-input type="password" placeholder="Password" v-model="password"></b-form-input>
        <small id="passwordHelpBlock" class="form-text text-muted">
          Your password must be 6-20 characters long.
        </small>
      </form>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'CreateUserComponent',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    clearData () {
      this.email = ''
      this.password = ''
    },
    handleOk (evt) {
      evt.preventDefault()

      if (!this.email || !this.password) {
        alert('Please enter your email and password')

      } else if (!this.validateEmail(this.email)) {
        alert('bad email format')

      } else if (this.password.length < 6) {
        alert('Password is too short')

      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.clearData()
      this.$refs.modal.hide()
    },
    validateEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>
