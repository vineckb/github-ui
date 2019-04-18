import Vue from 'vue';
import axios from 'axios';

const clientId = '340bb03e7de2983aad44';
const clientSecret = 'f246b355f7e7afa6168c21e4b01973b7ce5b5cd7';

const github = axios.create({
  baseURL: 'https://api.github.com'
});

// transform response because no working pass headers
// input: access_token=:access_token&scope=&token_type=bearer
// output: { access_token: '...', token_type: '...' }
const urlEncodedToObject = data => {
  const obj = {};

  data.split('&').map(i => {
    const [key, value] = i.split('=');
    obj[key] = value;
  });

  return obj;
};

export default {
  authorizeUrl: `https://github.com/login/oauth/authorize?client_id=${clientId}`,

  fetchIssues(username, repository) {
    const url = `/repos/${username}/${repository}/issues`;
    return github.get(url);
  },

  fetchIssue(username, repository, number) {
    return github.get(`/repos/${username}/${repository}/issues/${number}`);
  },

  lockIssue(username, repository, number) {
    const url = `/repos/${username}/${repository}/issues/${number}/lock`;
    return github.put(url);
  },

  auth(code) {
    return new Promise((resolve, reject) => {
      const params = {
        code,
        client_id: clientId,
        client_secret: clientSecret
      };

      axios
        .post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', params)
        .then(({ data }) => {
          resolve(urlEncodedToObject(data))
        }).catch(e => reject(e));

    });
  }
}
