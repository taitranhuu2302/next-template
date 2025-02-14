import axios from 'axios';
import { camelizeKeys } from 'humps';

const axiosClient = axios.create({
  baseURL: '/api'
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = camelizeKeys(response.data);
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      error.response.data = camelizeKeys(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
