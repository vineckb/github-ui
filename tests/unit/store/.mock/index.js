import Vue from 'vue';
import Vuex from 'vuex';
import sinon from 'sinon';

import auth from './auth';
import issues from './issues';
import repositories from './repositories';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },

  mutations: {
    loading: jest.fn(),

    loaded: jest.fn()
  },

  modules: { auth, issues, repositories }
});
