import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../views/layout/Index.vue'
// import Home from '../views/Home.vue'
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
    path: '/manage',
    name: 'manage',
    meta: {
      title: "管理总台",
      icon: "icon-aside-console"
    },
    component: Layout,
    children: [
      {
        path: '/user',
        name: 'user',
        meta: {
          title: "用户管理",
          icon: "icon-aside-user"
        },
        component: User
      },
      {
        path: '/role',
        name: 'role',
        meta: {
          title: "角色管理",
          icon: "icon-aside-home"
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
