import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/account/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
