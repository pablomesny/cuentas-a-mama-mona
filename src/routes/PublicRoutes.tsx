import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '../store/authStore';

interface Props {
  children: ReactNode;
}

export const PublicRoutes: FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Navigate to="/" /> : <div>{children}</div>;
};
