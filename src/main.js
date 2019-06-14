import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.less'

// import Vant from 'vant';
// import 'vant/lib/index.css';

import { Swipe, SwipeItem, Tab, Tabs,Tabbar, TabbarItem, List , DropdownMenu, DropdownItem, Toast} from 'vant'
Vue
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)
  .use(List)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
