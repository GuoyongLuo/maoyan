import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index/index.vue'),
      children: [
        {
          path: 'films',
          name: 'film',
          component: () => import('./views/Index/film.vue'),
          meta: {
            tabIndex: 0
          }
        },
        {
          path: 'cinemas',
          name: 'cinema',
          component: () => import('./views/Index/cinema.vue'),
          meta: {
            tabIndex: 1
          }
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City/index.vue')
    },
    {
      path: '/mines',
      name: 'mine',
      component: () => import('./views/Index/mine.vue')
    },
  ]
})
