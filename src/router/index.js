import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/account/Login.vue'
import Register from '../views/account/Register.vue'
import Forgot from '../views/account/Forgot.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
   {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
