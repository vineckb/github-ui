import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$api = axios.create({
  baseURL: 'https://api.github.com'
})
