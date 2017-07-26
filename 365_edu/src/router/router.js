import App from '../App'
import home from '../pages/home'
import detail from '../pages/detail'
import message from '../pages/message'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      },
      {
        path: '/detail',
        component: detail
      },
      {
        path: '/message',
        component: message
      }
    ]
  }
]
