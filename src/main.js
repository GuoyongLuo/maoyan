import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.less'

// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(vant)

import { Swipe, SwipeItem, Tab, Tabs,Tabbar, TabbarItem  } from 'vant'
Vue
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
