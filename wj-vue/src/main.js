import Vue from 'vue'
import App from './App'
import router from './router'

// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 需要设置拦截器，下面添加对store的引用
import store from './store'


var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

//访问每一个页面之前调用
//beforeEach为一个钩子函数，也就是在某些机会会被调用的函数
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
}
)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,

  // 注意这里，添加store
  store,

  components: { App },
  template: '<App/>'
})
