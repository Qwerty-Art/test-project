import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routerHistory = createWebHistory()


import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import ContactsPage from '@/pages/contacts'
import NotFoundPage from '@/pages/notFound'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage,
    },
    {
      path: '/:CathAll(.*)',
      name: '404',
      component: NotFoundPage,
    }
  ]
})

export default routers
