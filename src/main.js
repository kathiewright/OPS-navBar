import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { routes } from './routes.js'
import store from './store/store.js'

//use vue router
Vue.use(VueRouter);
const router = new VueRouter ({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  //add router to vue
  router,
  //add store to vue
  store,
  render: h => h(App)
})
