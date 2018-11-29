<template>
    <div>
        <navbar-component />

        <div class="login-container">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="username" class="sr-only">Username</label>
            <input type="text" id="username" class="form-control" v-model="username" placeholder="Username" autofocus>
            <label for="password" class="sr-only">Password</label>
            <input type="password" id="password" class="form-control" v-model="password" placeholder="Password">

            <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
            <create-user-component />
        </div>

        <footer-component />
    </div>
</template>

<script>
    import axios from 'axios'
    import NavbarComponent from './Navbar.vue'
    import FooterComponent from './Footer.vue'
    import CreateUserComponent from './CreateUser.vue'
    import '../assets/less/login.less'

    const requests = axios.create({
        baseURL: 'http://localhost:8000/api',
    });

    export default {
        name: 'LoginComponent',
        data: function() {
            return {
                username: '',
                password: ''
            }
        },
        components: {
            NavbarComponent,
            FooterComponent,
            CreateUserComponent
        },
        methods: {
            async login() {
                const body = {username: this.username, password: this.password}

                try {
                    const session = await requests.post('/auth/api-token/', body)
                    localStorage.setItem('token', session.data.token)
                    setTimeout( () => this.$router.push({ path: '/'}), 2000);

                } catch(error) {
                    throw error
                }
            }
        }
    }
</script>
