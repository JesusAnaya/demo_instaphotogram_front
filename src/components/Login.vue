<template>
    <div>
        <navbar-component />

        <div class="login-container">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>

            <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
            <create-user-component />
        </div>

        <footer-component />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import NavbarComponent from './Navbar.vue'
    import FooterComponent from './Footer.vue'
    import CreateUserComponent from './CreateUser.vue'
    import '../assets/less/login.less'

    export default {
        name: 'LoginComponent',
        components: {
            NavbarComponent,
            FooterComponent,
            CreateUserComponent
        },
        methods: {
            login: function() {
                this.loginUser({user: {
                    full_name: 'José José',
                    email: 'killeranaya@gmail.com'
                }})
            },
            ...mapMutations([
                'loginUser'
            ])
        }
    }
</script>
