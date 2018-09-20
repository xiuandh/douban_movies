import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/pages/homeTop'
import City from '@/components/pages/city'
import Search from '@/components/pages/search'
import in_theaters from '@/components/pages/in_theaters'
import coming_soon from '@/components/pages/coming_soon'
import new_movies from '@/components/pages/new_movies'
import details from '@/components/pages/details'
import top250 from '@/components/pages/top250'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',//命名路由
      component: home,
      props:true
    },
    {
      path: '/city',
      name: 'city',
      component: City,
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/in_theaters',
      name: 'in_theaters',
      component: in_theaters,
      props:true
    },
    {
      path: '/coming_soon',
      name: 'coming_soon',
      component: coming_soon
    },
    {
      path: '/new_movies',
      name: 'new_movies',
      component: new_movies
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details,
      props:true
    },
    {
      path: '/top250',
      name: 'top250',
      component: top250,
    },
  ]
})
