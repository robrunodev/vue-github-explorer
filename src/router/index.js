import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/repository/:reponame',
    name: 'Repository',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Repository/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
