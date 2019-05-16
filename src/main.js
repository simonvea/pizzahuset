import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import BootstrapVue from 'bootstrap-vue'
import Accounting from "accounting-js"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.filter("currency", function(value) {
  return Accounting.formatMoney(value, {symbol: "kr", format: "%v %s"})
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
