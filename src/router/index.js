import Vue from 'vue'
import Router from 'vue-router'
import all_teachers from '@/components/all_teachers'
import submit_chat from '@/components/submit_chat'
import teacher_details from '@/components/teacher_details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all_teachers',
      component: all_teachers
    },
    {
      path: '/all_teachers',
      name: 'all_teachers',
      component: all_teachers
    },
    {
      path: '/submit_chat',
      name: 'submit_chat',
      component: submit_chat
    },
    {
      path: '/teacher_details/:Pid',
      name: 'teacher_details',
      component: teacher_details
    }
  ]
})
