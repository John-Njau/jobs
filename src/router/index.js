import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
    path: '/movie/:id',
    name: 'movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/MovieView.vue'),
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
