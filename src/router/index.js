import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/namirnice',
    name: 'namirnice',
    component: () => import('../views/Namirnice.vue')
  },
  {
    path: '/recepti',
    name: 'recepti',
    component: () => import('../views/Recepti.vue')
  },
  {
    path: '/trgovina',
    name: 'trgovina',
    component: () => import('../views/Trgovina.vue')
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import('../views/Registracija.vue')
  },  
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import('../views/Prijava.vue')
  },
  {
    path: '/zaboravljena',
    name: 'zaboravljena',
    component: () => import('../views/Zaboravljena.vue')
  },
  {
    path: '/profil',
    name: 'profil' ,
    component: () => import ('../views/Profil.vue')
  },
  {
    path: '/kosarica',
    name: 'kosarica',
    component: () => import('../views/Kosarica.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
