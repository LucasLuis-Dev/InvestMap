import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/home/HomeView.vue')
const SearchPage = () => import('../views/search/SearchView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path:'/search',
      name: 'Search',
      component: SearchPage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Home' }
    }
  ]
})

export default router
