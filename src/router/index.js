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
    path: '/partner',
    name: 'partner',
    component: () => import('../views/Partner.vue')
  },
  {
    path: '/recepti',
    name: 'recepti',
    component: () => import('../views/Recepti.vue')
  },

  {
    path: '/onama',
    name: 'onama',
    component: () => import('../views/Onama.vue')
  },
  {
    path: '/poklon',
    name: 'poklon',
    component: () => import('../views/Poklon.vue')
  },
  {
    path: '/socialfeed',
    name: 'socialfeed',
    component: () => import('../views/SocialFeed.vue')
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
    path: '/prijavatest',
    name: 'prijavatest',
    component: () => import('../views/Prijavatest.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
