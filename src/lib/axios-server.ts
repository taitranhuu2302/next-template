import axios from 'axios';
import { camelizeKeys } from 'humps';
import { getServerSession } from 'next-auth';

const axiosServer = axios.create({
  baseURL: process.env.BASE_URL_API
});

axiosServer.interceptors.request.use(
  async (config) => {
    const session = await getServerSession();

    if (session) {
      config.headers.Authorization = `Bearer ${session.user?.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosServer.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = camelizeKeys(response.data);
    }
    return response ? response.data : response;
  },
  (error) => {
    if (error.response && error.response.data) {
      error.response.data = camelizeKeys(error.response.data);
    }
    return Promise.reject(error?.response ? error.response.data : error);
  }
);

export default axiosServer;
