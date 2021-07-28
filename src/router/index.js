import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Tabbar from '@/views/tabbar'

Vue.use(VueRouter)

const routes = [
  {
    name: 'LoginPage',
    path: '/login',
    component: Login
  },
  {
    name: 'Test',
    path: '/test',
    component: () => import('@/views/test')
  },
  {
    name: 'Tabbar',
    path: '/',
    component: Tabbar,
    children: [
      {
        path: '/',
        component: () => import('@/views/home')
      },
      {
        path: '/home',
        component: () => import('@/views/home2')
      }
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
