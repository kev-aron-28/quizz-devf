import { createRouter, createWebHistory } from 'vue-router'
import quizzModule from '@/modules/quizz/router'
const routes = [
  {
    path: '/',
    ...quizzModule
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
