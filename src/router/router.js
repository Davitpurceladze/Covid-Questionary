import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Personal from '../pages/Personal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home 
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router