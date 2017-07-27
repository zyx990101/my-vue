
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Router from './router'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
