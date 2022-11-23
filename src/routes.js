import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routerHistory = createWebHistory()


import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import ProjectsPage from '@/pages/projects'
import ContactsPage from '@/pages/contacts'
import NotFoundPage from '@/pages/notFound'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      props:{
        page: '',
        title: 'Главная'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
      props:{
        page: 'Проекты',
        title: 'Проекты'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      props:{
        page: 'О компании',
        title: 'О компании'
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage,
      props:{
        page: 'Контакты',
        title: 'Мы рядом'
      }
    },
    {
      path: '/:CathAll(.*)',
      name: '404',
      component: NotFoundPage,
    }
  ]
})

export default routers
