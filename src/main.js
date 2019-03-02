import Vue from 'vue'
import VueRouter from 'vue-router'

import {routes} from './routes.js'

import App from './components/App.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // mode: 'history',
  // linkExactActiveClass: 'active',
  // scrollBehavior: function(to, from, savedPosition) {
  //   return savedPosition || { x: 0, y: 0 }
  // }
})

new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
