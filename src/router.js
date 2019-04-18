import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./pages/IssuesList'),
    },
    {
      path: '/issue/:number',
      name: 'issue-details',
      component: () => import('./pages/IssueDetails'),
    },
    {
      path: '/new',
      name: 'create-issue',
      component: () => import('./pages/CreateIssue'),
    }
  ],
});
