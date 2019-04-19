import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import VuePlyr from 'vue-plyr'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-plyr/dist/vue-plyr.css'
import ActionCableVue from 'actioncable-vue'

Vue.use(Vuetify, {
  iconfont: 'md'
})
Vue.use(VuePlyr)
Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: 'all',
  connectionUrl: process.env.VUE_APP_WS
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')