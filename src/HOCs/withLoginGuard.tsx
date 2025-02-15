import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const withLoginGuard = (Component: React.ComponentType) => {
  return async function WithLoginGuard(props: any) {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      return redirect('/');
    }

    return <Component {...props} />;
  };
};

export default withLoginGuard;
