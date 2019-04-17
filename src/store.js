import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
      state.issues = issues;
    },

    setIssue(state, issue) {
      state.issue = issue;
    }
  },

  actions: {
    async fetchIssues({ state, commit }) {
      const url = `/repos/${state.username}/${state.repository}/issues`;
      const { data } = await this._vm.$api.get(url);
      commit('setIssues', data);
    },

    async fetchIssue({ state, commit }, number) {
      const url = `/repos/${state.username}/${state.repository}/issues/${number}`;
      const { data } = await this._vm.$api.get(url);
      console.log(data);
      commit('setIssue', data);
    },
  },
});
