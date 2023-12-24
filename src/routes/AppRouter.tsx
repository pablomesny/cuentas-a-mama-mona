import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { Layout } from '../pages/Layout';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <div>Login Page</div>
          </PublicRoutes>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <Layout>
              <HomePage />
            </Layout>
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
