import withLoginGuard from '@/HOCs/withLoginGuard';
import React, { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => children;

export default withLoginGuard(AuthLayout);
