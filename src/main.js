import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Gravatar from 'vue-gravatar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('v-gravatar', Gravatar);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
