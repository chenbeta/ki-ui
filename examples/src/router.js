import Vue from 'vue';
import Router from 'vue-router';
import test from './components/test';
import hello from '../pages/hello-test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: test
    },
    {
      path: '/hello',
      component: hello
    }
  ]
});
