import api from '@/services/api';

export async function fetchIssues({ state, commit }, repository) {
  commit('loading', true);

  const { data } = await api
    .fetchIssues(state.user.username, repository);

  commit('setIssues', data);
  commit('loading', false);
}

export async function fetchIssue({ state, commit }, { number, repository }) {
  commit('loading', true);
  const { data } = await api.fetchIssue(state.user.username, repository, number);
  commit('setIssue', data);
  commit('loading', false);
}

export async function createIssue({ state, commit }, { title, body, repository }) {
  const username = state.user.username;
  const { data } = await api.createIssue(username, repository, { title, body })
  return data;
}

export async function lockIssue({ state, commit }, { number, repository }) {
  await api.lockIssue(state.user.username, repository, number);
  commit('lockIssue', number);
}

export async function unlockIssue({ state, commit }, { number, repository }) {
  await api.unlockIssue(state.user.username, repository, number)
  commit('unlockIssue', number);
}

export async function auth({ commit, dispatch }, code) {
  commit('loading', true);
  const data = await api.auth(code);
  localStorage.setItem('token', data['access_token']);
  commit('setToken', data['access_token']);

  dispatch('loadUser');
  commit('loading', false);
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
