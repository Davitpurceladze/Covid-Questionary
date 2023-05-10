import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Personal from '../pages/Personal.vue'
import Covid from '../pages/Covid.vue'
import Vaccine from '../pages/Vaccine.vue'
import Office from '../pages/Office.vue'
import Thanks from '../pages/Thanks.vue'

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
  },
  {
    path: '/covid',
    name: 'covid',
    component: Covid
  },
  {
    path: '/vaccine',
    name: 'vaccine',
    component: Vaccine
  },
  {
    path: '/office',
    name: 'office',
    component: Office
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: Thanks
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router