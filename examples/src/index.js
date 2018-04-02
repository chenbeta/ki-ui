import Vue from 'vue';
import App from './app';
import router from './router';
import kiUI from '@/index';

Vue.config.productionTip = false;

Vue.use(kiUI);

new Vue({
  el: '#App',
  router,
  components: { App },
  template: '<App/>'
});
