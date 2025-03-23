import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'noir-production.up.railway.app',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('accessToken');
  return config;
});

export default instance;
