// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from "axios";
import router from './router';
import store from './store';
import 'font-awesome/css/font-awesome.min.css';
import echarts from 'echarts';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import i18n from './i18n';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

let pending = [];
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  for(let p in pending) {
    if(pending[p].u === config.url + '&' + config.method) {
      pending[p].f();
      pending.splice(p,1);
    }
  }
}
// axios拦截器配置
axios.interceptors.request.use(
  config => {
    console.log(pending);
    removePending(config);
    config.cancelToken = new cancelToken((c)=>{
      pending.push({ u: config.url + '&' + config.method, f: c});
    })
    return config
  },function (error) {
    return Promise.reject(error)
  }
);
axios.interceptors.response.use(
  response => {
    return response
  },function (error) {
    return Promise.reject(error)
  }
);

Vue.use(iView);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n: i18n,
  components: { App },
  template: '<App/>'
})
