import { getCurrentUser, login } from '@/services/auth';
import { getErrorMessage } from '@/utils/error';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const data = await login(credentials);
          if (!data) return null;
          const user = await getCurrentUser(data.accessToken);
          return {
            ...user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
          };
        } catch (error) {
          throw new Error(getErrorMessage(error));
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    }
  }
};
