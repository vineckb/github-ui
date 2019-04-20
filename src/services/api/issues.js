import github, { config } from './github';

export default {
  list(username, repository) {
    const url = `/repos/${username}/${repository}/issues`;
    return github.get(url);
  },

  item(username, repository, number) {
    return github.get(`/repos/${username}/${repository}/issues/${number}`);
  },

  create(username, repository, data) {
    return github.post(`/repos/${username}/${repository}/issues`, data, config());
  },

  lock(username, repository, number) {
    const url = `/repos/${username}/${repository}/issues/${number}/lock`;
    return github.put(url, null, config());
  },

  unlock(username, repository, number) {
    const url = `/repos/${username}/${repository}/issues/${number}/lock`;
    return github.delete(url, config());
  }
};
