import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './app.vue'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
