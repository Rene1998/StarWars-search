const routes = [
  {
    path: '/',
		redirect: '/home'
  },

  {
    path: '/home',
    component: () => import('src/pages/HomePage.vue')
  }
]

export default routes
