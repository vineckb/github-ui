import api from '@/services/api';

export async function fetchList({ state, commit, rootState }, repository) {
  const { data } = await api.issues.list(rootState.auth.user.username, repository);
  commit('setList', data);
}

export async function fetchItem({ state, commit, rootState }, { number, repository }) {
  const { data } = await api.issues.item(rootState.auth.user.username, repository, number);
  commit('setItem', data);
}

export async function create({ state, commit, rootState }, { title, body, repository }) {
  const username = rootState.auth.user.username;
  const { data } = await api.issues.create(username, repository, { title, body })
  return data;
}

export async function lock({ state, commit, rootState }, { number, repository }) {
  await api.issues.lock(rootState.auth.user.username, repository, number);
  commit('lock', number);
}

export async function unlock({ state, commit, rootState }, { number, repository }) {
  await api.issues.unlock(rootState.auth.user.username, repository, number)
  commit('unlock', number);
}
