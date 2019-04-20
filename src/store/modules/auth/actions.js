import api from '@/services/api';

export async function auth({ commit, dispatch }, code) {
  const data = await api.auth.auth(code);
  commit('setToken', data['access_token']);

  dispatch('loadUser');
}

export async function loadUser({ commit, dispatch }) {
  const { data } = await api.auth.getUser();
  commit('setUser', data);

  await dispatch('repositories/fetchList', null, { root: true });
}

export function logout({ commit }) {
  commit('setToken', '');
}
