import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/Home'
import city from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/city',
      name: 'City',
      component: city
    },
    {
      path: '/detail/:id',
      // 动态路由
      name: 'Detail',
      component: Detail
    }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
