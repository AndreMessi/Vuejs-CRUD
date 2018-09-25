import Vue from 'vue'
import Router from 'vue-router'
import appHomePage from '@/components/appHomePage'
import About from '@/components/appAboutPage'
import appSidebar from '@/components/appSidebar'
import appProduct from '@/components/appProduct'
import addProduct from '@/components/addProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appHomePage',
      component: appHomePage
    },
    {
      path: '/about',
      name: 'appAboutPage',
      component: About
    },
    {
      path: '/sidebar',
      name: 'appSidebar',
      component: appSidebar,
      children: [
        {
          path: '/',
          name: 'appProduct',
          component: appProduct
        },
        {
          path: 'product',
          name: 'addProduct',
          component: addProduct
        }
      ]
    }
  ]
})
