import api from '@/services/api';

export async function fetchIssues({ state, commit }) {
  const { data } = await api
    .fetchIssues(state.username, state.repository);

  commit('setIssues', data);
}

export async function fetchIssue({ state, commit }, number) {
  const url = `/repos//issues/${number}`;
  const { data } = await api.fetchIssue(state.username, state.repository);
  commit('setIssue', data);
}

export async function lockIssue({ state, commit }, number) {
  await api.lockIssue(state.username, state.repository, number)
  commit('lockIssue', number);
}

export async function unlockIssue({ state, commit }, number) {
  await api.unlockIssue(state.username, state.repository, number)
  commit('unlockIssue', number);
}

export async function auth({ commit }, code) {
  const data = await api.auth(code);
  localStorage.setItem('token', data['access_token']);
  commit('setToken', data['access_token']);
}
