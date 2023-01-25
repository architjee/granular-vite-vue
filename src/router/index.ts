import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:location',
      name: 'location',
      component: HomeView
    },
    {
      path: '/:location/:placeid',
      name: 'placeid',
      component: HomeView
    }
  ]
})

export default router
