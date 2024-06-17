import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('../views/FeedView.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next()
    } else {
      alert("No tiene acceso a esta sección")
      next("/register")
    }
  } else {
    next()
  }
})

export default router
