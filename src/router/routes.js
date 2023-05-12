
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
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
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
