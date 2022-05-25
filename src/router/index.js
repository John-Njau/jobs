import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LatestView from '../views/movie/LatestView'
import ErrorPage from '../views/ErrorPageView'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id(\\d+)',
    name: 'movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/MovieView.vue'),
    props: true
  },
  {
    path: '/movie/:category',
    name: 'category',
    component: LatestView,
    props: true
  },
//  catchall, 404 page
{
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: ErrorPage
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
