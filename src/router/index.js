import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administrar from '../views/Administrar.vue'
import Editar from '../views/Editar.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/administrar',
    name: 'administrar',
    component: Administrar
  },
  {
    path: '/editar',
    name: 'editar',
    props:true,
    component: Editar
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About', 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
