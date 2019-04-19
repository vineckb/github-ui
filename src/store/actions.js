import api from '@/services/api';

export async function fetchIssues({ state, commit }) {
  commit('loading', true);

  const { data } = await api
    .fetchIssues(state.user.username, state.repository);

  commit('setIssues', data);
  commit('loading', false);
}

export async function fetchIssue({ state, commit }, number) {
  const { data } = await api.fetchIssue(state.user.username, state.repository, number);
  commit('setIssue', data);
}

export async function createIssue({ state, commit }, { title, body }) {
  const username = state.user.username;
  const repository = state.repository;
  const { data } = await api.createIssue(username, repository, { title, body })
  return data;
}

export async function lockIssue({ state, commit }, number) {
  await api.lockIssue(state.user.username, state.repository, number);
  commit('lockIssue', number);
}

export async function unlockIssue({ state, commit }, number) {
  await api.unlockIssue(state.user.username, state.repository, number)
  commit('unlockIssue', number);
}

export async function auth({ commit, dispatch }, code) {
  const data = await api.auth(code);
  localStorage.setItem('token', data['access_token']);
  commit('setToken', data['access_token']);

  dispatch('loadUser')
}

export async function loadUser({ commit, dispatch }) {
  const { data } = await api.getUser();
  commit('setUser', data);

  dispatch('loadRepositories');
}

export async function loadRepositories({ commit }) {
  const { data } = await api.getRepositories();
  commit('setRepositories', data);
}

export function logout({ commit }) {
  localStorage.setItem('token', '');
  commit('setToken', '');
}

export function selectRepository({ commit, dispatch }, repository) {
  commit('setRepository', repository);
  dispatch('fetchIssues');
}
