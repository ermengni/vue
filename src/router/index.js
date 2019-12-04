import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path:"/xiao",
      name:"xiao",
      component: () => import(/* webpackChunkName: "about" */ '../views/Xiao.vue')
    },{
      path:"/my",
      name:"my",
      component: () => import(/* webpackChunkName: "about" */ '../views/My.vue')
    },{
      path:"/kong",
      name:"kong",
      component: () => import(/* webpackChunkName: "about" */ '../views/Kong.vue')
    }]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
