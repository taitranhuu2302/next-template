import withAuth from '@/HOCs/withAuth';
import React, { PropsWithChildren } from 'react';

const ProtectedLayout = ({ children }: PropsWithChildren) => {
  return children;
};

export default withAuth(ProtectedLayout);
