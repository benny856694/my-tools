import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/my-tools/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HelloWorld.vue'),
      props: {
        msg: 'Hello Vue 3 + TypeScript + Vite + Tailwind CSS/UI + Pinia + Vue Router'
      }
    },
    {
      path: '/vlessmod',
      name: 'vlessmod',
      component: () => import('@/views/VlessUrlMod.vue'),
      props: {
        msg: 'Hello Vue 3 + TypeScript + Vite + Tailwind CSS/UI + Pinia + Vue Router'
      }
    },
    {
      path: '/firmware',
      name: 'firmware',
      component: () => import('@/views/FirmwareView.vue')
    },
    {
      path: '/firmman',
      name: 'firmwareManagement',
      component: () => import('@/views/FirmwareManagement.vue')
    }
  ]
})

export default router
