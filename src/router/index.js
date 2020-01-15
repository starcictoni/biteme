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
    path: '/poklon',
    name: 'poklon',
    component: () => import('../views/Poklon.vue')
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
]

const router = new VueRouter({
  routes
})

export default router
