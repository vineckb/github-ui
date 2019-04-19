import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMaterialIcon from 'vue-material-icon';

Vue.component(VueMaterialIcon.name, VueMaterialIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
