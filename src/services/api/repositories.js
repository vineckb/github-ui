import github, { config } from './github';

export default {
  list() {
    return github.get('/user/repos', config())
  }
};
