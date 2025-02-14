import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    accessToken: string;
    refreshToken: string;
  }

  interface Session extends DefaultSession {
    user?: User;
    expires: ISODateString;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
    accessToken: string;
    refreshToken: string;
  }
}
