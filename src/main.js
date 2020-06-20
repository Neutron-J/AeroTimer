import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  store
})
