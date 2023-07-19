import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Group252 from './views/group252'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Group252',
      path: '/',
      component: Group252,
    },
  ],
})
