import AnimateClass from '@/models/animate-class'
import AnimateClassSpeed from '@/models/animate-class-speed'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:catchall(.*)',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      enterClass: new AnimateClass('animate__bounceIn', AnimateClassSpeed.Faster),
      leaveClass: new AnimateClass('animate__bounceOut', AnimateClassSpeed.Faster)
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router