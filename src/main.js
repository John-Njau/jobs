import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma/css/bulma.css'
// pagination
import JwPagination from 'jw-vue-pagination';


Vue.component('jw-pagination', JwPagination)
Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
