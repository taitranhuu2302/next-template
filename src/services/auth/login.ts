'use server';

import axiosServer from '@/lib/axios-server';
import type { AuthLogin, AuthResponse } from '@/types/auth';

const login = async (body: AuthLogin): Promise<AuthResponse> =>
  axiosServer.post('/auth/login', body);

export default login;
