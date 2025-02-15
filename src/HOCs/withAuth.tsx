import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const withAuth = (Component: React.ComponentType) => {
  return async function WithAuth(props: any) {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return redirect('/auth/login');
    }

    return <Component {...props} />;
  };
};

export default withAuth;
