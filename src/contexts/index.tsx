'use client';

import { SessionProvider } from 'next-auth/react';
import React, { PropsWithChildren } from 'react';
import QueryProvider from './QueryContext';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <SessionProvider>{children}</SessionProvider>
    </QueryProvider>
  );
};

export default Provider;
