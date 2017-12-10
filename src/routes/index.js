import Vue from 'vue'
import Router from 'vue-router'
import Signin from '../components/SignIn.vue'
import Admin from '../components/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: Signin  
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ],
  mode: 'history'
})
