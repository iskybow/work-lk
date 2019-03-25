import Vue from 'vue'
import Router from 'vue-router'
import vacancy from './components/FormVacancy.vue'
import resume from './components/FormResume.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vacancy',
      name: 'vacancy',
      component: vacancy
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
