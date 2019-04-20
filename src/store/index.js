import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import auth from './modules/auth';
import issues from './modules/issues';
import repositories from './modules/repositories';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: 0,
  },

  mutations: {
    loading(state) {
      state.loading++;
    },

    loaded(state) {
      state.loading--;
    },

    resetLoading(state) {
      state.loading = 0
    }
  },

  modules: { auth, issues, repositories },

  plugins: [new VuexPersistence().plugin]
});
