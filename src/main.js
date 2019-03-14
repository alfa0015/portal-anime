// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import ActionCableVue from 'actioncable-vue'
Vue.use(VuePlyr)
Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: 'all',
  connectionUrl: `ws://${process.env.WS_HOST}/cable`
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
