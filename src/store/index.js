import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import auth from './modules/auth';
import issues from './modules/issues';
import repositories from './modules/repositories';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },

  mutations: {
    loading(state) {
      state.loading = true;
    },

    loaded(state) {
      state.loading = false;
    }
  },

  modules: { auth, issues, repositories },

  plugins: [new VuexPersistence().plugin]
});
