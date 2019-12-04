import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/font_br5jlqbi8tn/iconfont.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
