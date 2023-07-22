import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      hideNavigation: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/cv',
    name: 'Curriculum Vitae',
    component: () => import('../views/CurriculumView.vue')
  },
  {
    path: '/:catchall(.*)',
    name: 'Not Found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      hideNavigation: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router