'use server';

import axiosServer from '@/lib/axios-server';
import { User } from 'next-auth';

const getCurrentUser = async (token: string): Promise<User> => {
  return axiosServer.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export default getCurrentUser;
