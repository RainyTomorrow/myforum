import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  // 路由从hash模式改为history模式
  mode: 'history',
  routes: [
    //下面都是固定的写法
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   //注释前没有设置父组件
    //   path: '/index',
    //   name: 'AppIndex',
    //   component: AppIndex,
    //   // 设置index页面为需要验证的状态，也就是启动拦截器
    //   meta: {
    //     requireAuth: true
    //   }
    // },
    {
      //设置index为home的子组件
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问,所以设置重定向
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          // 设置index页面为需要验证的状态，也就是启动拦截器
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})

