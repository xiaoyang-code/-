// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import "./assets/reset.css"
import "./assets/rem.js"
import axios from "axios"
import store from "./store/index"

// axios 的默认全局配置
axios.defaults.baseURL = 'https://api.it120.cc/small4';

Vue.prototype.http = axios
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
