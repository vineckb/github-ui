import api from '@/services/api';

export async function fetchList({ commit }) {
  const { data } = await api.repositories.list();
  commit('setList', data);
}
