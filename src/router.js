import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Login')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('./pages/IssuesList'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/issue/:number',
      name: 'issue-details',
      component: () => import('./pages/IssueDetails'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/new',
      name: 'create-issue',
      component: () => import('./pages/CreateIssue'),
      meta: {
        requireAuth: true
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
