import * as mutations from './mutations';
import * as actions from './actions';

const state = {
  item: {},

  list: []
};

export default {
  namespaced: true,

  state,
  mutations,
  actions
}
