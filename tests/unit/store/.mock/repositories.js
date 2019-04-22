export default {
  namespaced: true,

  state: {
    list: []
  },
  mutations: {
    setList: jest.fn()
  },
  actions: {
    fetchList: jest.fn()
  }
}
