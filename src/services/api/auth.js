import axios from 'axios';
import github, { config } from './github';

const clientId = '071225bb41f4ee451f9d';
const clientSecret = '2c333b7e1ec1b019eec3a3d4678b5b5310bcdf97';

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

const getToken = () => {
  const stored = localStorage.getItem('vuex')
  if (!stored) return false;

  const state = JSON.parse(stored);

  return state.auth.token;
};

export default {
  authorizeUrl: `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`,

  getToken,

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
  },

  getUser() {
    return github.get('/user', config())
  }
}
