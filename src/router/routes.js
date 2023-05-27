const routes = [
  {
   path: '/',
   component: () => import('layouts/AuthLayout.vue'),
   children: [
    { path: '/', redirect: '/login' },
    { path: 'login', component: () => import('src/pages/LoginPage.vue') },
    { path: 'register', component: () => import('src/pages/RegisterPage.vue') }
   ],
   meta: { auth: false}
  },
  {
   path: '/app',
   component: () => import('layouts/MainLayout.vue'),
   children: [
    {
      path: '/home',
      component: () => import('pages/PageHome.vue'),
      name: 'Home'
    },
    { 
      path: '/about',
      component: () => import('pages/PageAbout.vue'),
      name: 'About'
    },
    {
      path: '/explore',
      component: () => import('pages/PageExplore.vue'),
      name: 'Explore'
    },
    {
      path: '/notifications',
      component: () => import('pages/PageNotifications.vue'),
      name: 'Notifications'
    },
    {
      path: '/profile',
      component: () => import('pages/PageProfile.vue'),
      name: 'Profile'
    }
   ],
   meta: { auth: true }
  },
  {
   path: '/:catchAll(.*)*',
   component: () => import('pages/ErrorNotFound.vue')
  }
 ]
 
 export default routes