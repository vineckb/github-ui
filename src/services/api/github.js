import axios from 'axios';

export function config() {
  const token = JSON.parse(localStorage.getItem('vuex')).auth.token;
  return {
    headers: {
      Authorization: `token ${token}`
    }
  }
}

export default axios.create({
  baseURL: 'https://api.github.com'
});
