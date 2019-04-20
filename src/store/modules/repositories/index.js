import * as mutations from './mutations';
import * as actions from './actions';

const state = {
  list: []
};

export default {
  namespaced: true,

  state,
  mutations,
  actions
}
