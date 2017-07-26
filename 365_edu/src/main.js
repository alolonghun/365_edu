// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router'
import './config/rem'
import Vuerify from 'vuerify'
import  { ToastPlugin } from 'vux'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ToastPlugin)
Vue.use(Vuerify)
Vue.use(VueRouter)

Vue.filter('convert', function (value) {
  value = value || '';
  value = parseInt(value);
  return value/10000>=1 ? value/10000+'.'+(value/1000)%10+'万' : value;
})

const router = new VueRouter({
  routes
})

// FastClick.attach(document.body)
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
//   }, false);
// }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
