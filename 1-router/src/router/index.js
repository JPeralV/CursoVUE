import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/pokemonsView.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'poke',
      component: ()=>import('../views/pokeView.vue')
    },
    {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
      component: () => import('../views/notFound.vue')
    },
  ]
})

export default router
