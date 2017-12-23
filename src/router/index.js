import Vue from 'vue'
import Router from 'vue-router'

import Category from '@/modules/category'

import VerticalCentering from '@/modules/vertical-centering'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vertical-centering',
      name: 'Vertical Centering',
      component: VerticalCentering
    },
    {
      path: '/',
      name: 'Category',
      component: Category
    }
  ]
})
