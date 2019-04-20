import * as mutations from './mutations';
import * as actions from './actions';

const state = {
  token: '',
  user: {
    name: '',
    username: '',
    avatar: ''
  }
};

export default {
  namespaced: true,

  state,
  mutations,
  actions
}
