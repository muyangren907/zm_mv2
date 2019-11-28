import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem, ActionSheet, Icon,List } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(ActionSheet).use(Icon).use(List);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
