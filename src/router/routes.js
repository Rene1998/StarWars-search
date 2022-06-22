const routes = [
  {
    path: '/',
		redirect: '/home'
  },

  {
    path: '/home',
    component: () => import('pages/home.vue')
  }
]

export default routes
