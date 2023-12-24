import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { Layout } from '../pages/Layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
