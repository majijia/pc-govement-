import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/index'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/index'),
      children:[
        {
          path:'/Statistics',
          name:'Statistics',
          component:() =>import('@/pages/Statistics')
        },
        {
          path:'/defMan',
          name:'defMan',
          component:() =>import('@/pages/defMan')
        },
        {
          path:'/myProduc',
          name:'myProduc',
          component:() =>import('@/pages/myProduc')
        },
        {
          path:'/sysment',
          name:'sysment',
          component:() =>import('@/pages/sysment')
        },
      ]
    },
    {
      path: '/*',
      name: '404',
      component: () => import('@/pages/notFound')
    },
    
  ]
})

export default router;
