import sinon from 'sinon';

export default {
  namespaced: true,

  state: {
    token: '',
    user: {
      name: '',
      username: '',
      avatar: ''
    }
  },
  mutations:{
    setUser: jest.fn(),
    setToken: jest.fn()
  },
  actions: {
    auth: jest.fn(),
    loadUser: jest.fn(),
    logout: jest.fn()
  }
}
