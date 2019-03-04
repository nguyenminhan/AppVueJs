import Vue from 'vue'
import VueRouter from 'vue-router'

import {routes} from './routes.js'

import App from './components/App.vue'
import { Form, HasError, AlertError } from 'vform'


// editor support
import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'
Vue.use(Editor);


import Vuex from 'vuex'
import storeData from "./store/index"

Vue.use(VueRouter)

// V-form

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

// Support vuex

Vue.use(Vuex)

const store = new Vuex.Store(
    storeData
)

// Sweet alert 2
import swal from 'sweetalert2'
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast

const router = new VueRouter({
  routes,
  mode: 'history'
  // linkExactActiveClass: 'active',
  // scrollBehavior: function(to, from, savedPosition) {
  //   return savedPosition || { x: 0, y: 0 }
  // }
})

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
