
const routes = [
  {
    path: '/',
    component: () => import('layouts/CustomLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/myList', component: () => import('pages/MyList.vue') },
      { path: '/statistics', component: () => import('pages/Statistics.vue') },
      { path: '/introduceContent', component: () => import('pages/IntroduceContent.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
