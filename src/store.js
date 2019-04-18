import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    username: 'vineckb',
    repository: 'citartech-frontend',
    issues: [],
    issue: {},
  },

  mutations: {
    setUsername(state, username) {
      state.username = username;
    },

    setRepository(state, repository) {
      state.repository = repository;
    },

    setIssues(state, issues) {
      state.issues = issues.map(({ title, number, state }) => ({
        title, number, state
      }));
    },

    setIssue(state, issue) {
      state.issue = issue;
    },

    setToken(state, token) {
      state.token = token;
    }
  },

  actions: {
    async fetchIssues({ state, commit }) {
      const { data } = await api
        .fetchIssues(state.username, state.repository);

      commit('setIssues', data);
    },

    async fetchIssue({ state, commit }, number) {
      const url = `/repos//issues/${number}`;
      const { data } = await api.fetchIssue(state.username, state.repository);
      commit('setIssue', data);
    },

    async lockIssue({ state, commit }, number) {
      const response = await api.lockIssue(state.username, state.repository, number);
      console.log(response);
    },

    async auth({ commit }, code) {
      const data = await api.auth(code);
      localStorage.setItem('token', data['access_token']);
      commit('setToken', data['access_token']);
    }
  },
});
