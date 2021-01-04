import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../views/layout/Index.vue'
import Home from '../views/home/Index.vue'
import Role from '../views/manage/Role.vue'
import User from '../views/manage/User.vue'
const routes = [
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
    path: '/index',
    name: 'Index',
    hidden: false,
    meta: {
      title: "主页"
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        hidden: false,
        meta: {
          title: "主页",
          icon: 'home'
        },
        component: Home
      },
    ]
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
