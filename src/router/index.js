import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
     path: '/',
     redirect: '/home'
  },
  {
     path: '/home',
     name: 'Home',
     component: () => import('../pages/home/Home')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/list',
    name:'List',
    component: ()=> import('../pages/list/List')
  },
  {
    path:'/city',
    name:'City',
    component:() => import('../pages/city/City')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
