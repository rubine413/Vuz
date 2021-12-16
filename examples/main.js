import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import purl from '../packages'
// 注册组件库
Vue.use(purl)

Vue.config.productionTip = false
new Vue({
  // router,
  // store,
  render: h => h(App),
}).$mount('#app')
