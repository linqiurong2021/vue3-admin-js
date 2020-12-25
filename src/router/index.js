import { createRouter, createWebHistory } from 'vue-router'
// account
import Forgot from '../views/account/Forgot.vue'
import Register from '../views/account/Register.vue'
import Login from '../views/account/Login.vue'
// layout
import Layout from '../views/layout/Index.vue'
// main
import Role from '../views/manage/Role.vue'
import User from '../views/manage/User.vue'

const routes = [
   {
    path: '/login',
    hidden: true,
    name: 'Login',
    component: Login
  },
   {
    path: '/register',
    hidden: true,
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot',
    name: 'Forgot',
    hidden: true,
    component: Forgot
  },
  {
    path: '/layout',
    name: 'layout',
    hidden: true,
    meta: {
      title: "布局"
    },
    component: Layout
  },
  {
    path: '/manage',
    name: 'manage',
    meta: {
      title: "管理总台",
      icon: "console"
    },
    component: Layout,
    children: [
      {
        path: '/user',
        name: 'user',
        meta: {
          title: "用户管理",
          icon: "user"
        },
        component: User
      },
      {
        path: '/role',
        name: 'role',
        meta: {
          title: "角色管理",
          icon: "role"
        },
        component: Role,
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
