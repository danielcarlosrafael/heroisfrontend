import Vue from 'vue'
import Router from 'vue-router'
import Indexx from '@/components/Index'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Indexx
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
