import Vue from 'vue'
import Router from 'vue-router'
import maskLayer from '../components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'maskLayer',
      component: maskLayer
    }
  ]
})
