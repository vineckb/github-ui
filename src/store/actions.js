import api from '@/services/api';

export async function fetchIssues({ state, commit }) {
  commit('loading', true);

  const { data } = await api
    .fetchIssues(state.username, state.repository);

  commit('setIssues', data);
  commit('loading', false);
}

export async function fetchIssue({ state, commit }, number) {
  const { data } = await api.fetchIssue(state.username, state.repository, number);
  commit('setIssue', data);
}

export async function createIssue({ state, commit }, { title, body }) {
  const { username, repository } = state;
  const { data } = await api.createIssue({ username, repository, data: { title, body } })
  return data;
}

export async function lockIssue({ state, commit }, number) {
  await api.lockIssue(state.username, state.repository, number);
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

export function logout({ commit }) {
  localStorage.setItem('token', '');
  commit('setToken', '');
}

export function selectRepository({ commit, dispatch }, { username, repository }) {
  commit('setUsername', username);
  commit('setRepository', repository);
  dispatch('fetchIssues');
}
