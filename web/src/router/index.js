import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const All = () => import('views/all/All')
const Free = () => import('views/free/Free')
const Rank = () => import('views/rank/Rank')
const Read = () => import('views/read/Read')


const routes = [
  { path: '/', redirect: '/all'},
  { path: '/all', component: All },
  { path: '/free', component: Free },
  { path: '/rank', component: Rank },
  { path: '/read', component: Read },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
