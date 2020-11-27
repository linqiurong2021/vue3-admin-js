import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/account/Login.vue'
import Register from '../views/account/Register.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
