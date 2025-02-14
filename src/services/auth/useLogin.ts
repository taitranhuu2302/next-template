import type { AuthLogin } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';

const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: AuthLogin) => {
      return signIn('credentials', {
        ...credentials,
        redirect: false
      });
    }
  });
};

export default useLogin;
