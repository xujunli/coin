import Vue from 'vue'
import vuex from 'vuex'
import coinMenu from './modules/coinMenu.js'
import common from './modules/common.js'
Vue.use(vuex);

export default new vuex.Store({
  modules: {
    coinmenu: coinMenu,
    common: common
  }
})
