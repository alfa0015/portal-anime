import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Anime from '@/components/anime'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: Anime
    }
  ]
})
