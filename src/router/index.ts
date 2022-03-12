import { createRouter, createWebHistory } from 'vue-router'
import { VpnContainer, WarStatsContainer } from '@/containers';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: WarStatsContainer,
    },
    {
      path: '/vpn',
      component: VpnContainer,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
