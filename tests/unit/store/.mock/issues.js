import sinon from 'sinon';

export const state = {
  item: {},

  list: []
};

export const actions = {
  fetchList: jest.fn(),
  fetchItem: jest.fn(),
  create: jest.fn(),
  lock: jest.fn(),
  unlock: jest.fn()
};

export const mutations = {
    setList: jest.fn(),
    setItem: jest.fn(),
    lock: jest.fn(),
    unlock: jest.fn()
};

export default {
  namespaced: true,

  state,
  mutations,
  actions
}
