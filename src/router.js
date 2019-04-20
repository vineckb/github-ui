import Vue from 'vue';
import Router from 'vue-router';
import api from '@/services/api';

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
      component: () => import('./pages/Repositories'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/:repository/issues',
      name: 'issues-list',
      component: () => import('./pages/Issues'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/:repository/issues/new',
      name: 'create-issue',
      component: () => import('./pages/IssueCreate'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/:repository/issues/:number',
      name: 'issue-details',
      component: () => import('./pages/Issue'),
      meta: {
        requireAuth: true
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!api.auth.getToken()) {
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
