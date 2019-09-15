import Vue from 'vue'
import Router from 'vue-router'
import AllUsers from './views/AllUsers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allUsers',
      component: AllUsers
    },
    {
      path: '/favorite',
      name: 'favorite',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Favorite.vue')
    }
  ]
})
