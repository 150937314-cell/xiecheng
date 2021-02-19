import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入css样式
import './assets/css/reset.css'
import './assets/css/border.css'

//引入fastClick插件
import fastClick from 'fastclick'

//使用vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引用阿里巴巴矢量图
import './assets/css/iconfont.css';


//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

//引入animate库
import animate from 'animate.css'

import Bscroll from 'better-scroll'

import VuexPersistence from 'vuex-persist'



const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.prototype.$vuexLocal = vuexLocal
Vue.config.productionTip = false
fastClick.attach(document.body)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
