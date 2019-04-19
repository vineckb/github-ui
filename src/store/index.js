import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as actions from './actions'
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    token: '',
    username: 'vineckb',
    repository: 'citartech-frontend',
    issues: [],
    issue: {},
  },

  mutations,
  actions,

  plugins: [new VuexPersistence().plugin]
});
