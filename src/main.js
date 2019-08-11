import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

import TodoList from './containers/TodoList/TodoList'
import NotFoundPage from './containers/NotFoundPage/NotFoundPage'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TodoList
  },
  {
    path: '*',
    component: NotFoundPage
  }
]
const router = new VueRouter({ routes })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
