import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from "../src/store"
import axios from 'axios'
import './index.css'

window.axios = axios;

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
})

app.$mount('#app')
