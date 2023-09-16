import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: () => import('@/components/AccueilPage.vue') },

    {
      path: '/prestations',
      name: 'Prestations',
      component: () => import('@/components/PrestationsPage.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/components/ContactPage.vue')
    },
    {
      path: '/mentions',
      name: 'Mentions',
      component: () => import('@/components/MentionsPage.vue')
    }
  ]
})

export default router
