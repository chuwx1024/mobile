import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: Login
  },
  {
    name: 'Test',
    path: '/test',
    component: () => import('@/views/test')
  }
]

const router = new VueRouter({
  routes
})

export default router
