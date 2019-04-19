import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMaterialIcon from 'vue-material-icon';
import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

Vue.use(VueSimpleMarkdown);

Vue.component(VueMaterialIcon.name, VueMaterialIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
